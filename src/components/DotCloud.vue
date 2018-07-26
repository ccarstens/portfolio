<template>
    <div style="user-select: none;" @mouseout="mouseOut" @mouseover="mouseOver">
                <!--@preload="preload"-->
        <vue-p5
                @sketch="sketch"
                @setup="setup"
                @draw="draw"
                @mousepressed.once="handleUserInteraction"
                @keypressed="keyPressed"
                @mousemoved="mouseMoved"
        >

        </vue-p5>
    </div>
</template>

<script>
    import VueP5 from "vue-p5";
    import Mover from "../p5/Mover"

    import {event} from '../event'

    export default {
        name: "DotCloud",
        components: {
            "vue-p5": VueP5
        },
        props: [
            'width',
            'height',
            'play'
        ],
        data: () => ({
            event,
            particles: [],
            bgColor: null,
            moverCount: 300,
            s: null,
            target: null,
            mouseOnCanvas: false,
            canvasWidth: 0,
            canvasHeight: 0,
            frameRate: 30,

            mouseActive: false,
            mouseTimeout: null,

            spillParticles: false,
            stopped: false,

            deadParticlesCount: 0,

            backgroundMode: false,

            backgroundPolarMode: false,

            backgroundRandomCount: 0,

            targetRadius: 0,
            targetTheta: 0
        }),
        created(){

        },
        mounted(){

        },
        methods: {
            sketch(s){
                s.draw = () => {
                    s.background(255, 0, 0)
                }
            },
            preload(s) {
                // this.backgroundImage = p.loadImage("static/p5js.png");
                // console.log(this.backgroundImage);
            },
            setup(s) {
                this.s = s
                // this.bgColor = p.color(255, 200, 128)
                this.bgColor = s.color(255)

                this.resetMouse()

                s.createCanvas(this.width, this.height, s.WEBGL);
                // p.createCanvas(300, 150, p.WEBGL);
                s.background(this.bgColor)
                s.frameRate(this.frameRate)

                this.createParticles()

                this.target = s.createVector(0, 0)
                this.targetRadius = this.height * 0.3
                this.setTarget()

                // window.addEventListener('resize', () => {
                //     p.resizeCanvas(this.width, this.height)
                //     p.background(this.bgColor)
                // })

            },
            draw(s) {
                if(this.deadParticlesCount === this.particles.length && !this.backgroundMode){
                    // s.noLoop()
                    // s.frameRate(90)
                    setTimeout(() => {
                        this.spillParticles = false
                        this.backgroundMode = true
                        this.setTarget()
                        this.particles.forEach(particle => {
                            particle.speedLimit = 2
                        })
                    }, 5000)



                }

                s.translate(-s.width/2, -s.height/2)
                s.background(this.bgColor)

                if(this.mouseActive && !this.backgroundMode){
                    this.updateMouseVector()
                }else if(s.frameCount % this.autoTargetInterval === 0){
                    if(!this.backgroundPolarMode){
                        this.backgroundRandomCount++
                    }
                    if(this.backgroundRandomCount === 10){
                        this.backgroundRandomCount = 0
                        this.backgroundPolarMode = true
                    }
                    this.setTarget()
                }

                // s.fill(255, 0, 0)
                // s.ellipse(this.target.x, this.target.y, 10, 10)

                if(!this.spillParticles){
                    this.steerParticlesTowardsTarget()
                }else{
                    this.displaySpilledParticles()
                }


            },



            createParticles(){
                for(let i = 0; i < this.moverCount; i++){
                    let mover = new Mover(this.s,
                        this.s.random(this.width / 10 * 2, this.width / 10 * 8),
                        // this.s.random(this.height / 5 * 3, this.height)
                        this.s.random(0, this.height)
                    )
                    mover.size = this.s.random(2, 4)
                    this.particles.push(mover)
                }
            },

            steerParticlesTowardsTarget(){
                this.particles.forEach(particle => {
                    const force = this.target.copy().sub(particle.location)
                    // force.normalize().mult(particle.size * 0.7)
                    force.normalize()
                    if(this.backgroundMode){
                        let factor = this.target.copy().sub(particle.location).mag() * 0.01
                        force.mult(0.01).mult(1)
                    }
                    particle.applyForce(force)

                    particle.display()
                })
            },

            displaySpilledParticles(){
                this.particles.forEach(particle => {
                    if(particle.velocity.mag() < 4 && !particle.dead){
                        particle.kill()
                        this.deadParticlesCount++
                    }else{
                        const friction = particle.velocity.copy().mult(particle.size * -0.02)
                        particle.applyForce(friction)
                    }
                    particle.display()
                })
            },

            keyPressed({ keyCode }) {

            },
            mouseMoved({ mouseX, mouseY, pmouseX, pmouseY }) {
                clearTimeout(this.mouseTimeout)
                this.mouseActive = true
                this.mouseTimeout = setTimeout(() => {
                    this.mouseActive = false
                }, 100)
            },
            handleUserInteraction(){
                this.spillParticles = true
                this.particles.forEach(particle => {
                    particle.velocity.mult(2)
                    // const mag = particle.velocity.mag()
                    // particle.velocity = this.target.copy().sub(particle.location).mult(-1).normalize().mult(mag)
                    // particle.velocity = this.s.createVector(this.s.random(-1, 1), this.s.random(-1, 1)).normalize().mult(24)

                })
                this.event.$emit('user-interacted-with-sketch')

                this.stopped = true
            },

            updateMouseVector(){
                if(this.target === null){
                    this.target = this.s.createVector(this.s.mouseX, this.s.mouseY)
                }else{
                    this.target.x = this.s.mouseX
                    this.target.y = this.s.mouseY
                }
            },

            resetMouse(){
                this.target = this.s.createVector(this.width / 2, this.height / 2)
            },
            mouseOut(){
                this.mouseOnCanvas = false
                this.resetMouse()
            },
            mouseOver(){
                this.mouseOnCanvas = true
            },
            resizeCanvas(width, height){
                if(this.s){
                    this.s.resizeCanvas(width, height)
                }
            },
            startPlayMode(){
                this.s.frameRate(this.frameRate)
            },
            stopPlayMode(){
                this.s.frameRate(0)
            },
            setTarget(){
                if(this.backgroundPolarMode){
                    this.targetTheta += 10
                    const x = this.targetRadius * this.s.sin(this.targetThetaInRadians)
                    const y = this.targetRadius * this.s.cos(this.targetThetaInRadians)
                    this.target.x = x + this.s.width / 2
                    this.target.y = y + this.s.height / 2

                    if(this.targetTheta % 1800 === 0){
                        this.targetTheta = 0
                        this.backgroundPolarMode = false
                    }

                }else{
                    const minX = this.width / 5 * 2
                    const minY = this.height / 5 * 2

                    const maxX = this.width / 5 * 3
                    const maxY = this.height / 5 * 3

                    if(this.target === null) this.target = this.s.createVector(0, 0)

                    this.target.x = this.s.random(minX, maxX)
                    this.target.y = this.s.random(minY, maxY)
                }
            }
        },
        computed: {
            autoTargetInterval(){
                if(this.backgroundMode){
                    if(this.backgroundPolarMode){
                        return 6
                    }else{
                        return 150
                    }
                }
                return 30
            },
            targetThetaInRadians(){
                return this.s.radians(this.targetTheta)
            },
        },
        watch: {
            width(newWidth){
                if(this.hasOwnProperty('resizeCanvas')){
                    this.resizeCanvas(newWidth, this.height)
                }
            },
            play(newState){
                if(this.s){
                    if(newState) this.startPlayMode()
                    else this.stopPlayMode()
                }
            }

        }
    };
</script>
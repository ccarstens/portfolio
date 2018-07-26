<template>
    <div style="user-select: none;" @mouseout="mouseOut" @mouseover="mouseOver">
                <!--@preload="preload"-->
        <vue-p5
                @sketch="sketch"
                @setup="setup"
                @draw="draw"
                @mousepressed="handleUserInteraction"
                @keypressed="keyPressed"
                @mousemoved="mouseMoved"
                @mousedragged="mouseDragged">

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

            spillParticles: false,
            stopped: false,

            deadParticlesCount: 0
        }),
        created(){

        },
        mounted(){

        },
        methods: {
            sketch(s){
                s.draw = () => {
                    // console.log("there")
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

                // window.addEventListener('resize', () => {
                //     p.resizeCanvas(this.width, this.height)
                //     p.background(this.bgColor)
                // })

            },
            draw(s) {
                if(this.deadParticlesCount === this.particles.length){
                    s.noLoop()
                }

                s.translate(-s.width/2, -s.height/2)
                s.background(this.bgColor)
                this.updateMouseVector()

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
                    particle.applyForce(force)
                    particle.display()
                })
            },

            displaySpilledParticles(){
                this.particles.forEach(particle => {
                    if(particle.velocity.mag() < 1){
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
                if(this.mouseOnCanvas) this.target = this.s.createVector(mouseX, mouseY)
            },
            mouseDragged({ mouseX, mouseY, pmouseX, pmouseY }) {
                if(this.mouseOnCanvas) this.target = this.s.createVector(mouseX, mouseY)
            },
            handleUserInteraction(){
                this.spillParticles = true
                this.particles.forEach(particle => {
                    particle.velocity.mult(2)
                    // const mag = particle.velocity.mag()
                    // particle.velocity = this.target.copy().sub(particle.location).mult(-1).normalize().mult(mag)
                    // particle.velocity = this.s.createVector(this.s.random(-1, 1), this.s.random(-1, 1)).normalize().mult(24)

                    this.event.$emit('user-interacted-with-sketch')
                })

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
            }
        },
        computed: {

        },
        watch: {
            width(newWidth){
                if(this.hasOwnProperty('resizeCanvas')){
                    this.resizeCanvas(newWidth, this.height)
                }
            },
            play(newState){
                console.log("p5 play changed to", newState)
                if(this.s){
                    console.log("passed")
                    if(newState) this.startPlayMode()
                    else this.stopPlayMode()
                }
            }

        }
    };
</script>
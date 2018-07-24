<template>
    <vue-p5
        @setup="setup"
        @draw="draw"
        @mousepressed="mousedown"
        @touchstarted="mousedown"
        @mousereleased="mouseup"
    ></vue-p5>
</template>

<script>
    import VueP5 from 'vue-p5'
    import Bolt from '../p5/Bolt'
    import InstableRect from '../p5/InstableRect'
    import {event} from '../event'
    export default {
        name: "PlayCollision",
        components: {
            "vue-p5": VueP5
        },
        props: [
            'width',
            'height',
            'play'
        ],
        created(){
            // window.addEventListener('devicemotion', e => {
            //     // console.log(e)
            // }, true)
        },
        data: () => ({
            event,
            s: null,
            bolt: null,
            instableRects: [],
            tensionBolt: false,
            shootBolt: false,
            explodedRects: 0,

        }),
        methods: {
            setup(s){
                this.p = s
                this.bolt = new Bolt(s, 0, 0, 80, 100)

                this.instableRects.push(new InstableRect(s, 75, 0, 30, 100))
                this.instableRects.push(new InstableRect(s, 125, 0, 30, 100))

                s.createCanvas(this.width, this.height, s.WEBGL)
                s.pixelDensity(window.devicePixelRatio)
                s.background(s.color(123, 0, 123))
                // s.background(s.color(255, 255, 255))
                s.frameRate(30)
            },
            draw(s){
                s.background(s.color(255, 255, 255))
                // s.background(0)
                if(this.tensionBolt){
                    // this.bolt.applyForce(s.createVector(-2, 0))
                    this.bolt.velocity.x = -9
                    this.bolt.applyForce(this.bolt.bowStringStrength())
                }else if(this.shootBolt){
                    if(this.bolt.velocity.mag() <= 1){
                        this.bolt.velocity.x = 0
                        this.shootBolt = false
                    }else{
                        this.bolt.applyForce(s.createVector(-0.7, 0))
                    }

                }

                this.instableRects.forEach(rect => {
                    if(this.bolt.hitsInstableRectangle(rect) && !rect.broken){
                        rect.breakIntoParticles(this.bolt.velocity.mag())
                        this.explodedRects++
                    }
                })

                if(this.explodedRects === this.instableRects.length){
                    setTimeout(() => {
                        this.event.$emit('activation-sketch-finished')
                    }, 1000)
                }

                this.bolt.display()
                this.instableRects.forEach(rect => {
                    rect.display()
                })

                if(this.instableRects[0].explosionFinished && this.instableRects[1].explosionFinished){
                    // s.frameRate(0)
                    s.noLoop()
                }

            },
            mousedown(s){
                this.increaseTension()
            },
            mouseup(s){
                this.releaseBolt(s)
            },
            increaseTension(){
                this.tensionBolt = true
            },
            releaseBolt(s){
                // this.bolt.color = s.color(0, 255, 0)
                this.tensionBolt = false
                this.bolt.velocity.x = 0

                this.shootBolt = true
                let v = this.bolt.distanceFromOrigin() * 0.2
                if(v > 0){
                    this.bolt.velocity.x = v
                }


            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <vue-p5
        @setup="setup"
        @draw="draw"
        @mousepressed="mousedown"
        @mousereleased="mouseup"
    ></vue-p5>
</template>

<script>
    import VueP5 from 'vue-p5'
    import Bolt from '../p5/Bolt'
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
        data: () => ({
            s: null,
            bolt: null,
            tensionBolt: false,
            shootBolt: false,

        }),
        methods: {
            setup(s){
                this.p = s
                this.bolt = new Bolt(s, 0, 0, 80, 100)
                s.createCanvas(this.width, this.height, s.WEBGL)
                // p.background(p.color(123, 0, 123))
                s.background(s.color(255, 255, 255))
                s.frameRate(30)
            },
            draw(s){
                s.background(s.color(255, 255, 255))
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

                    // this.shootBolt = false
                }
                this.bolt.display()

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
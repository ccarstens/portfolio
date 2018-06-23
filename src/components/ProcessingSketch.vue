<template>
    <div class="processing">
        <div ref="canvas"></div>
    </div>
</template>

<script>
    import Vector from '../p5/Vector'
    export default {
        data: function () {
            return {
                script: null,
                ps: null,
                x: 0,
                y: 0,
                canvas: null,
                vector: null
            }
        },
        mounted () {
            this.script = p => {
                this.x = 100
                this.y = 100

                p.setup = _ => {


                    this.canvas = p.createCanvas(600, 420)

                    this.vector = new Vector(p)
                    this.vector.setCo(0, 0)

                    this.canvas.parent(this.$refs.canvas)
                    p.frameRate(60)
                }

                p.draw = _ => {
                    p.background(0)

                    this.vector.show()
                    this.vector.update()
                    p.fill(255)
                    // p.rect(this.x, this.y, 50, 50)
                    p.rect(p.mouseX, p.mouseY, 50, 50)


                    // if(this.x > 600) this.x = 0
                    // this.x ++
                }
            }
            const P5 = require('p5')
            this.ps = new P5(this.script)
            console.log(this.ps)
        }
    }
</script>

<style scoped>

</style>
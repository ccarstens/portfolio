<template>
    <div style="">
        <vue-p5
                v-if="show"
                @preload="preload"
                @setup="setup"
                @draw="draw"
                @key-pressed="keyPressed"
                @mouse-moved="mouseMoved"
                @mouse-dragged="mouseDragged">
        </vue-p5>
        {{ shown }}
    </div>
</template>

<script>
    import VueP5 from "vue-p5";
    export default {
        name: "ProcessingElement",
        components: {
            "vue-p5": VueP5
        },
        data: () => ({
            show: true,
            shown: 0
        }),
        methods: {
            preload(sketch) {
                // this.backgroundImage = sketch.loadImage("static/p5js.png");
                // console.log(this.backgroundImage);
            },
            setup(sketch) {
                sketch.createCanvas(window.innerWidth / 2, 200);
                sketch.background(0)
                sketch.frameRate(25)
                window.addEventListener('resize', () => {
                    sketch.resizeCanvas(window.innerWidth / 2, 200)
                    sketch.background(0)
                    // this.setup(sketch)
                    // console.log(sketch.canvas)
                })

            },
            draw(sketch) {
                this.shown ++
            },
            keyPressed({ keyCode }) {

            },
            mouseMoved({ mouseX, mouseY, pmouseX, pmouseY }) {
            },
            mouseDragged({ mouseX, mouseY, pmouseX, pmouseY }) {
            },
        }
    };
</script>
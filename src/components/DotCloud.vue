<template>
    <div style="user-select: none;">
        <vue-p5
                @preload="preload"
                @setup="setup"
                @draw="draw"
                @key-pressed="keyPressed"
                @mouse-moved="mouseMoved"
                @mouse-dragged="mouseDragged">
        </vue-p5>
    </div>
</template>

<script>
    import VueP5 from "vue-p5";
    import Mover from "../p5/Mover"

    export default {
        name: "DotCloud",
        components: {
            "vue-p5": VueP5
        },
        data: () => ({
            movers: [],
            bgColor: null,
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight * 0.75,
            moverCount: 300,
            s: null,
            mouse: null
        }),
        methods: {
            preload(s) {
                // this.backgroundImage = s.loadImage("static/p5js.png");
                // console.log(this.backgroundImage);
            },
            setup(s) {
                this.s = s
                this.bgColor = s.color(0)

                this.mouse = s.createVector(this.canvasWidth / 2, this.canvasHeight / 2)

                s.createCanvas(this.canvasWidth, this.canvasHeight, s.WEBGL);
                s.background(this.bgColor)
                s.frameRate(40)

                this.createMovers()

                window.addEventListener('resize', () => {
                    s.resizeCanvas(this.canvasWidth, this.canvasHeight)
                    s.background(this.bgColor)
                })

            },
            createMovers(){
                for(let i = 0; i < this.moverCount; i++){
                    this.movers.push(new Mover(this.s,
                        this.s.random(0, this.canvasWidth),
                        this.s.random(0, this.canvasHeight)
                    ))
                }
            },
            updateMovers(){
                this.movers.forEach(mover => {
                    mover.updateTowards(this.mouse)
                })
            },
            showMovers(){
                this.movers.forEach(mover => mover.show())
            },
            draw(s) {
                s.translate(-s.width/2, -s.height/2)
                s.background(this.bgColor)
                this.updateMovers()
                this.showMovers()
            },
            keyPressed({ keyCode }) {

            },
            mouseMoved({ mouseX, mouseY, pmouseX, pmouseY }) {
                this.mouse = this.s.createVector(mouseX, mouseY)
            },
            mouseDragged({ mouseX, mouseY, pmouseX, pmouseY }) {
                this.mouse = this.s.createVector(mouseX, mouseY)
            },
        },
        computed: {

        }
    };
</script>
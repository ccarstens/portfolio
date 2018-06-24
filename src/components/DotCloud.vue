<template>
    <div style="user-select: none;" @mouseout="mouseOut" @mouseover="mouseOver">
        <vue-p5
                @sketch="sketch"
                @preload="preload"
                @setup="setup"
                @draw="draw"
                @keypressed="keyPressed"
                @mousemoved="mouseMoved"
                @mousedragged="mouseDragged">

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
        props: [
            'width',
            'height',
            'play'
        ],
        data: () => ({
            movers: [],
            bgColor: null,
            moverCount: 900,
            s: null,
            mouse: null,
            mouseOnCanvas: false,
            canvasWidth: 0,
            canvasHeight: 0,
            frameRate: 30,
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
                // this.backgroundImage = s.loadImage("static/p5js.png");
                // console.log(this.backgroundImage);
            },
            setup(s) {
                this.s = s
                // this.bgColor = s.color(255, 200, 128)
                this.bgColor = s.color(0)

                this.resetMouse()

                s.createCanvas(this.width, this.height, s.WEBGL);
                console.log("setup", this.width, this.height)
                // s.createCanvas(300, 150, s.WEBGL);
                s.background(this.bgColor)
                s.frameRate(this.frameRate)

                this.createMovers()

                // window.addEventListener('resize', () => {
                //     s.resizeCanvas(this.width, this.height)
                //     s.background(this.bgColor)
                // })

            },
            createMovers(){
                for(let i = 0; i < this.moverCount; i++){
                    this.movers.push(new Mover(this.s,
                        this.s.random(this.width / 5 * 3, this.width),
                        this.s.random(this.height / 5 * 3, this.height)
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
                if(this.mouseOnCanvas) this.mouse = this.s.createVector(mouseX, mouseY)
            },
            mouseDragged({ mouseX, mouseY, pmouseX, pmouseY }) {
                if(this.mouseOnCanvas) this.mouse = this.s.createVector(mouseX, mouseY)
            },
            resetMouse(){
                this.mouse = this.s.createVector(this.width / 2, this.height / 2)
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
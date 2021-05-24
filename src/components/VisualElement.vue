<template>
    <div :class="classObject">
        <figure>
            <div class="wrapper">
                <img v-if="isImage" :data-src="imageUrl"/>
                <VideoItem v-if="isVideo" :src="visualElementContent.src" :play="isVisible"/>
                <P5Sketch
                        v-if="isP5Sketch"
                        :name="visualElementContent.sketchName"
                        :dimensions="standardDimensions"
                        :isVisible="isActive"
                ></P5Sketch>
            </div>
            <figcaption v-html="e(visualElementContent.description)">
            </figcaption>
        </figure>
    </div>
</template>

<script>
    import VideoItem from './VideoItem'
    import P5Sketch from './P5Sketch'
    import e from '../localizedContent'
    export default {
        name: "VisualElement",
        props: [
            'content',
            'standardDimensions',
            'isVisible'
        ],
        components: {
            VideoItem,
            P5Sketch
        },
        created(){
            this.visualElementContent = this.content
        },
        mounted(){
            this.slide = this.$parent


            const linkElements = this.$el.getElementsByTagName('a')
            for(let i = 0; i < linkElements.length; i++){
                let link = linkElements[0]
                console.log("there")
                link.addEventListener('click', e => {
                    e.stopImmediatePropagation()
                })
            }
        },
        data(){
            return {
                visualElementContent: {},
                slide: null,
                test: false
            }
        },
        computed: {
            imageUrl(){
                return require('../' + this.visualElementContent.src)
            },
            isActive(){
                // console.log("getting isactive")
                return this.slide ? this.slide.isActive : false
            },
            classObject(){
                return {
                    'visual-content': true,
                    'image': this.isImage,
                    'video': this.isVideo,
                    'sketch': this.isP5Sketch,
                    'no-shadow': this.noDropShadow
                }
            },
            isImage(){
                if(this.visualElementContent.hasOwnProperty('src')){
                    return this.visualElementContent.src.match(/(gif|jpg|jpeg|png)$/)
                }
                return false
            },

            isVideo(){
                if(this.visualElementContent.hasOwnProperty('src')){
                    return this.visualElementContent.src.match(/(mp4|mov)$/)
                }
                return false
            },
            isP5Sketch(){
                return this.visualElementContent.hasOwnProperty('sketchName')
            },
            noDropShadow(){
                if(this.visualElementContent.hasOwnProperty('noShadow')){
                    return this.visualElementContent.noShadow
                }
                return false
            }
        },
        methods: {
            e,
        },
        watch: {

        }
    }
</script>

<style lang="scss">

    @import '../../node_modules/bootstrap-scss/functions';
    @import '../../node_modules/bootstrap-scss/variables';
    @import '../../node_modules/bootstrap-scss/mixins';
    @import '../../node_modules/bootstrap-scss/grid';


    $border-radius: 5px;

    $small-shadow: 0 8px 28px -5px rgba(0,0,0,0.20), 0 8px 10px -5px rgba(0,0,0,0.20);
    $large-shadow: 0 15px 40px -10px rgba(0,0,0,0.35), 0 10px 20px -10px rgba(0,0,0,0.35);

    img{
        max-width: 100%;
        max-height: 90vh;
        /*width: 100%;*/
        height: auto;
        margin: auto;

        display: inline-block;
        border-radius: $border-radius;
        -webkit-border-radius: $border-radius;

    }

    video{
        display: block;
        /*<!--margin-bottom: -1em;-->*/
        border-radius: $border-radius;
        -webkit-border-radius: $border-radius;

    }

    .visual-content{
        z-index: 1;

        .wrapper{
            display: inline-block;



            border-radius: $border-radius;
            -webkit-border-radius: $border-radius;
        }

    }

    .visual-content:not(.no-shadow){
        .wrapper{
            box-shadow: $small-shadow;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }

        .wrapper:hover{
            box-shadow: $large-shadow;
        }
    }

    figure{
        text-align: center;

        padding: 0.8vw 1.5vw 1.5vw 1.5vw;
    }


    @include media-breakpoint-down(lg){
        figure{
            padding: 1vw 4vw 4vw 4vw;
        }

    }




    figcaption{
        text-align: left;
        font-size: .75em;
        margin-top: 1em;
        padding: .2em .3em 0 .3em;

        p{
            margin-bottom: 0;
            /*line-height: 1.1em;*/
        }
    }

    .video figcaption{
        margin-top: calc(1em - 8px);
    }
</style>
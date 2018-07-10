<template>
    <div class="visual-content">
        <figure>
            <img v-if="isImage(visualElementContent)" :data-src="imageUrl"/>
            <VideoItem v-if="isVideo(visualElementContent)" :src="visualElementContent.src" :play="true"/>
            <P5Sketch
                    v-if="isP5Sketch(visualElementContent)"
                    :name="visualElementContent.sketchName"
                    :dimensions="standardDimensions"
                    :isVisible="isActive"
            ></P5Sketch>
            <figcaption>
                {{ e(visualElementContent.description)}}
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
        },
        data(){
            return {
                visualElementContent: {},
                slide: null
            }
        },
        computed: {
            imageUrl(){
                return require('../' + this.visualElementContent.src)
            },
            isActive(){
                // console.log("getting isactive")
                return this.slide ? this.slide.isActive : false
            }
        },
        methods: {
            e,
            isImage(visualElement){
                if(visualElement.hasOwnProperty('src')){
                    return visualElement.src.match(/(gif|jpg|jpeg|png)$/)
                }
                return false
            },
            isVideo(visualElement){
                if(visualElement.hasOwnProperty('src')){
                    return visualElement.src.match(/(mp4|mov)$/)
                }
                return false
            },
            isP5Sketch(visualElement){
                return visualElement.hasOwnProperty('sketchName')
            }
        }
    }
</script>

<style lang="scss">

    img{
        max-width: 100%;
        width: 100%;
        height: auto;
    }

    .visual-content{
        z-index: 1;
    }
</style>
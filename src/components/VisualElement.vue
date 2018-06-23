<template>
    <div class="visual-content">
        <figure>
            <img v-if="isImage(visualElementContent)" :src="test"/>
            <VideoItem v-if="isVideo(visualElementContent)" :src="visualElementContent.src" :play="true"/>
            <P5Sketch v-if="isP5Sketch(visualElementContent)" :name="visualElementContent.sketchName"></P5Sketch>
            <figcaption>{{ visualElementContent.description }}</figcaption>
        </figure>
    </div>
</template>

<script>
    import VideoItem from './VideoItem'
    import P5Sketch from './P5Sketch'
    export default {
        name: "VisualElement",
        props: [
            'content'
        ],
        components: {
            VideoItem,
            P5Sketch
        },
        created(){
            this.visualElementContent = this.content
        },
        data(){
            return {
                visualElementContent: {}
            }
        },
        computed: {
            test(){
                return require('../' + this.visualElementContent.src)
            }
        },
        methods: {
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
    }

    .visual-content{
        z-index: 1;
    }
</style>
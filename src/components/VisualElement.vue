<template>
    <div class="visual-content">
        <figure>
            <img v-if="isImage(visualElementContent.src)" :src="test"/>
            <VideoItem v-if="isVideo(visualElementContent.src)" :src="visualElementContent.src" :play="true"/>
            <figcaption>{{ visualElementContent.description }}</figcaption>
        </figure>
    </div>
</template>

<script>
    import VideoItem from './VideoItem'
    export default {
        name: "VisualElement",
        props: [
            'content'
        ],
        components: {
            VideoItem
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
            isImage(url){
                return url.match(/(gif|jpg|jpeg|png)$/)
            },
            isVideo(url){
                return url.match(/(mp4|mov)$/)
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
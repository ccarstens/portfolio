<template>
    <article>
        <header v-html="description"></header>
        <div class="content">
            <carousel :per-page="1" :pagination-enabled="false">
                <slide v-for="(slide, index) in projectContent.media" :key="index">
                    <VisualElement :content="slide" ></VisualElement>
                </slide>
            </carousel>
        </div>
    </article>
</template>

<script>

    import {Carousel, Slide} from 'vue-carousel'
    import VisualElement from './VisualElement'
    export default {
        name: "ProjectElement",
        components: {
            Carousel,
            Slide,
            VisualElement
        },
        props: [
            'content'
        ],
        data () {
            return {
                projectContent: {}
            }
        },
        created(){
            this.projectContent = this.content
        },
        computed: {
            description(){
                return `
                    <p>${ this.projectContent.title } - ${this.projectContent.year}</p>
                    <p>${ this.projectContent.description }</p>
                `
            }
        }
    }
</script>

<style lang="scss">

    .VueCarousel{
        width: 50%;
    }

    .VueCarousel-slide{
        width: 100vw;
    }
</style>
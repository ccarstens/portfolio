<template>
    <article :class="classObject" v-observe-visibility="{
    callback: visibilityChanged,
    throttle,
    intersection: {
        threshold
    }
    }">
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
                projectContent: {},
                isVisible: false,
                throttle: 300
            }
        },
        created(){
            this.projectContent = this.content
        },
        methods: {
            visibilityChanged(isVisible){
                this.isVisible = isVisible
            }
        },
        watch: {
            content(newContent){
                this.projectContent = newContent
            }
        },
        computed: {
            description(){
                return `
                    <p>${ this.projectContent.title } - ${this.projectContent.year}</p>
                    <p>${ this.projectContent.description }</p>
                `
            },
            classObject(){
                return {
                    visible: this.isVisible,
                    'project-element': true
                }
            },
            threshold(){
                return window.innerWidth > 400 ? 0.8 : 0
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

    .project-element{
        margin-bottom: 10em;
    }

    .visible{
        background: rgba(0, 255, 128, 0.1);
    }
</style>
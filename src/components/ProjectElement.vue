<template>
    <article :class="classObject" v-observe-visibility="{
    callback: visibilityChanged,
    throttle,
    intersection: {
        threshold
    }
    }">
        <div class="row">
            <AudioElement v-if="hasGlobalAudio" :play="playAudio" :src="projectContent.globalAudio.src"></AudioElement>
            <header v-html="description" class="description col order-0 col-md-4 order-md-1"></header>
            <div class="content col order-1 col-md-8 order-md-0">
                <carousel
                        :per-page="1"
                        :pagination-enabled="true"
                        :navigation-enabled="false"
                        @pageChange="handlePageChange"
                        class=""
                >
                    <slide
                            v-for="(slide, index) in projectContent.media"
                            :key="index"
                    >
                        <VisualElement
                                :content="slide"
                                :standardDimensions="standardContentDimensions"
                                :isVisible="isVisible"
                        ></VisualElement>
                    </slide>
                </carousel>
            </div>
        </div>
    </article>
</template>

<script>

    // import {Carousel, Slide} from '../../../vue-carousel/dist/vue-carousel.min'
    import {Carousel, Slide} from 'vue-carousel/'
    import VisualElement from './VisualElement'
    import AudioElement from './AudioElement'
    export default {
        name: "ProjectElement",
        components: {
            Carousel,
            Slide,
            VisualElement,
            AudioElement
        },
        props: [
            'content'
        ],
        data () {
            return {
                projectContent: {},
                isVisible: false,
                throttle: 300,
                carousel: null,
                activeSlide: 0,
                standardContentDimensions: {
                    width: 0,
                    height: 0
                }
            }
        },
        created(){
            this.projectContent = this.content
        },
        mounted(){
            this.carousel = this.$el.getElementsByClassName('VueCarousel')[0]

            this.standardContentDimensions.width = this.carousel.getBoundingClientRect().width
            this.standardContentDimensions.height = this.carousel.getBoundingClientRect().width / 4 * 3

            const firstImage = this.$el.getElementsByTagName('img')[0]

            firstImage.onload = (event) => {
                this.$nextTick(() => {
                    this.standardContentDimensions.height = event.target.height
                })
            }


            window.addEventListener('resize', () => {
                this.standardContentDimensions.width = firstImage.width
                this.standardContentDimensions.height = firstImage.height
            })
            // console.log("img", this.$el.getElementsByTagName('img')[0].naturalWidth)
        },
        methods: {
            visibilityChanged(isVisible){
                this.isVisible = isVisible
            },
            handlePageChange(activeSlide){
                this.activeSlide = activeSlide
            }
        },
        watch: {
            content(newContent){
                this.projectContent = newContent
            },
        },
        computed: {
            test(a){
                return this.activeSlide + a
            },
            description(){
                return `
                    <p>${ this.projectContent.title } - ${this.projectContent.year}</p>
                    <p>${ this.projectContent.description }</p>
                `
            },
            classObject(){
                return {
                    visible: this.isVisible,
                    'project-element': true,
                    'container-fluid': true,
                    dark: this.projectContent.title == "Stethoscope"
                }
            },
            threshold(){
                return window.innerWidth > 400 ? 0.8 : 0
            },
            playAudio(){
                return this.isVisible
            },
            hasGlobalAudio(){
                return this.projectContent.hasOwnProperty('globalAudio')
            }
        }
    }
</script>

<style lang="scss">

    .VueCarousel{
        width: 100%;
        /*touch-action: none;*/
    }

    .VueCarousel-slide{
        /*width: 100vw;*/
        /*background: lightgrey;*/
    }

    .project-element{
        margin-bottom: 10em;
        padding-top: 5em;
        padding-bottom: 3em;
        color: #007bff;
    }

    .project-element.dark{
        background: black;
    }


    .description{
        /*<!--z-index: -10;-->*/

    }

    .visible{
        /*background: rgba(0, 255, 128, 0.1);*/
    }
</style>
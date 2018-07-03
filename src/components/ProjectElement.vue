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
            <header class="description col order-0 col-md-4 order-md-1">
                <p>
                    <h3>{{e(projectContent.title)}}</h3> {{projectContent.year}}
                </p>
                <p v-html="e(projectContent.description) "></p>
                <transition name="fade" mode="out-in">
                    <div v-for="(slide, index) in projectContent.media" :key="index" v-if="index === currentPage" class="fading-description d-none d-sm-block">
                            {{ e(slide.description) }}
                    </div>
                </transition>
            </header>
            <div class="content col order-1 col-md-8 order-md-0">
                <carousel
                        :per-page="1"
                        :pagination-enabled="true"
                        :navigation-enabled="false"
                        paginationActiveColor="rgba(0, 123, 255, 1)"
                        paginationColor="rgba(0, 123, 255, .5)"
                        :paginationSize="9"
                        v-model="currentPage"
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

    import {Carousel, Slide} from '../../../vue-carousel/dist/vue-carousel.min'
    // import {Carousel, Slide} from 'vue-carousel'
    import VisualElement from './VisualElement'
    import AudioElement from './AudioElement'
    import e from '../localizedContent'
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
                currentPage: 0,
                projectContent: {},
                isVisible: false,
                throttle: 300,
                carousel: null,
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
            e,
            visibilityChanged(isVisible){
                this.isVisible = isVisible
            },
        },
        watch: {
            content(newContent){
                this.projectContent = newContent
            },
        },
        computed: {
            description(){
                return `
                    <p><h3>${ this.projectContent.title }</h3> ${this.projectContent.year}</p>
                    <p>${ this.projectContent.description }</p>
                `
            },
            classObject(){
                return {
                    visible: this.isVisible,
                    'project-element': true,
                    'container-fluid': true,
                    dark: this.hasDarkMode
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
            },
            hasDarkMode(){
                if(this.projectContent.hasOwnProperty('darkMode')){
                    return this.projectContent.darkMode
                }
                return false
            }
        }
    }
</script>

<style lang="scss">

    .VueCarousel{
        width: 100%;
        cursor: url(../assets/cursor.png), auto;
        cursor: -webkit-image-set(
            url(../assets/cursor.png) 2x
        ), auto;
    }

    .VueCarousel-wrapper{
        margin-bottom: -18px;
    }

    .VueCarousel-slide{
        /*width: 100vw;*/
        /*background: lightgrey;*/
        figure{
            margin-bottom: 0;
        }
    }

    .project-element{
        margin-bottom: 10em;
        padding-top: 5em;
        padding-bottom: 3em;
        color: #007bff;

        h3{
            font-size: inherit;
            display: inline-block;
        }
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

    .fading-description{
        margin-top: 5em;
    }

    .fade-enter, .fade-leave-to{
        opacity: 0;
    }

    .fade-enter-to, .fade-leave{
        opacity: 1;
    }

    .fade-enter-active{
        transition: opacity 500ms ease-out;
    }

    .fade-leave-active{
        transition: opacity 200ms ease-out;
    }
</style>
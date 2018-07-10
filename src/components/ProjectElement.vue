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

            <header class="description col-12 order-0 col-lg-4 order-lg-1 d-flex flex-column">
                <div>
                    <h3>{{e(projectContent.title)}}</h3> {{projectContent.year}}
                </div>

                <p v-html="e(projectContent.description) "></p>

                <p v-if="hasUrl">
                    <a :href="projectContent.url" target="_blank">{{e(labels.visit)}}</a>
                </p>

                <!--<transition name="fade" mode="out-in">-->
                    <!--<div class="fading-description" v-for="(slide, index) in projectContent.media" :key="index" v-if="index === currentPage">-->
                            <!--{{ e(slide.description) }}-->
                    <!--</div>-->
                <!--</transition>-->
            </header>

            <div class="content col-12 order-1 col-lg-8 order-lg-0">
                <carousel
                        :per-page="1"
                        :pagination-enabled="false"
                        :navigation-enabled="false"
                        paginationActiveColor="rgba(0, 123, 255, 1)"
                        paginationColor="rgba(0, 123, 255, .25)"
                        :paginationSize="9"
                        v-model="currentPage"
                        @click.native="handleCarouselClick"
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
    import state from '../state'
    import {labels} from '../assets/content'
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
                labels: labels,
                state: state,
                currentPage: 0,
                projectContent: {},
                isVisible: false,
                throttle: 300,
                carousel: null,
                slideCount: 0,
                standardContentDimensions: {
                    width: 0,
                    height: 0
                }
            }
        },
        created(){
            this.projectContent = this.content
            this.slideCount = this.projectContent.media.length
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
            handleCarouselClick(e){
                if(!this.state.getIsTouch()){
                    if(this.getLeftRightByEvent(e) === 'left'){
                        if(this.currentPage > 0) this.currentPage --
                    }else{
                        if(this.currentPage + 1 < this.slideCount) this.currentPage ++
                    }
                }
            },
            getLeftRightByEvent(e){
                const targetWidth = e.target.offsetWidth
                const clickedLocation = e.offsetX
                return clickedLocation <= targetWidth / 2 ? 'left' : 'right'
            }
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
            },
            hasUrl(){
                if(this.projectContent.hasOwnProperty('url')){
                    return this.projectContent.url.length > 0
                }
                return false
            },
            projectUrl(){
                if(this.hasUrl()){
                    return this.projectContent.url
                }
            }
        }
    }
</script>

<style lang="scss">

    @import '../../node_modules/bootstrap-scss/functions';
    @import '../../node_modules/bootstrap-scss/variables';
    @import '../../node_modules/bootstrap-scss/mixins';
    @import '../../node_modules/bootstrap-scss/grid';

    .VueCarousel{
        width: 100%;
        cursor: url(../assets/cursor.png), auto;
        cursor: -webkit-image-set(
            url(../assets/cursor.png) 2x
        ), auto;
    }

    .VueCarousel-wrapper{
        /*<!--margin-bottom: -18px;-->*/
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
        margin-top: 1em;
        /*background: red;*/
        /*min-height: 5em;*/
        /*margin-bottom: 2em;*/
    }

    @include media-breakpoint-up(md){
        .fading-description{
            /*margin-top: 5em;*/
            /*min-height: 0;*/
            /*margin-bottom: 0;*/
        }
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
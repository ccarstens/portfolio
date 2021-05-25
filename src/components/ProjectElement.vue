<template>
    <article :class="classObject"
             >
        <div class="row"
             v-observe-visibility="{
    callback: viewportVisibilityChanged,
    throttle,
    intersection: {
        threshold
    }
    }"
        >
            <AudioElement v-if="hasGlobalAudio" :play="playAudio" :src="projectContent.globalAudio.src"></AudioElement>

            <header class="description col-12 order-0 col-lg-4 order-lg-1 d-flex flex-column">
                <div>
                    <h3>{{e(projectContent.title)}}</h3> {{projectContent.year}}
                </div>

                <p v-html="e(projectContent.description) "></p>

                <p v-if="hasUrl">
                    <a :href="projectUrl" target="_blank">{{projectUrlLabel}}</a>
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
                        @mousemove.native="handleCarouselMousemove"
                        @mouseout.native="handleCarouselMouseout"
                        :class="carouselClassObject"
                >
                    <slide
                        v-for="(slide, index) in projectContent.media"
                            :key="index"
                    >
                        <VisualElement
                                :content="slide"
                                :standardDimensions="standardContentDimensions"
                                :isVisible="projectInViewport && currentPage === index"
                        ></VisualElement>
                    </slide>
                </carousel>
            </div>
        </div>
    </article>
</template>

<script>

    import {Carousel, Slide} from 'vue-carousel'
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
                labels,
                state,
                currentPage: 0,
                projectContent: {},
                projectInViewport: false,
                throttle: 300,
                carousel: null,
                slideCount: 0,
                cursorPosition: '',
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
            viewportVisibilityChanged(projectInViewport){
                this.projectInViewport = projectInViewport
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
            handleCarouselMousemove(e){
                this.cursorPosition = this.getLeftRightByEvent(e)
            },
            handleCarouselMouseout(e){
                this.cursorPosition = ''
            },
            getLeftRightByEvent(e){
                const targetWidth = e.target.offsetWidth
                const targetLocation = e.offsetX
                return targetLocation <= targetWidth / 2 ? 'left' : 'right'
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
                    <s><h3>${ this.projectContent.title }</h3> ${this.projectContent.year}</s>
                    <s>${ this.projectContent.description }</s>
                `
            },
            classObject(){
                return {
                    visible: this.projectInViewport,
                    'project-element': true,
                    'container-fluid': true,
                    dark: this.hasDarkMode,
                }
            },
            carouselClassObject(){
                return {
                    'cursor-right': this.cursorPosition === 'right',
                    'cursor-left': this.cursorPosition === 'left'
                }
            },
            threshold(){
                return window.innerWidth > 400 ? 0.4 : 0.4
            },
            playAudio(){
                return this.projectInViewport
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
                    return typeof this.projectContent.url == 'object' || this.projectContent.url.length > 0
                }
                return false
            },
            projectUrl(){
                if(this.hasUrl){
                    if(this.urlIsString){
                        return this.projectContent.url

                    }
                    return this.projectContent.url.uri
                }
            },
            projectUrlLabel(){
                if(this.hasUrl){
                    if(this.urlIsString){
                        return e(labels.visit)
                    }
                    return e(this.projectContent.url.label)
                }
            },
            urlType(){
                return typeof this.projectContent.url
            },
            urlIsObject(){
                return this.urlType == 'object'
            },
            urlIsString(){
                return this.urlType == 'string'
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
    }

    .VueCarousel.cursor-right{
        cursor: url(../assets/cursor-right.png), auto;
        cursor: -webkit-image-set(
                        url(../assets/cursor-right.png) 2x
        ), auto;
    }

    .VueCarousel.cursor-left{
        cursor: url(../assets/cursor-left.png), auto;
        cursor: -webkit-image-set(
                        url(../assets/cursor-left.png) 2x
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
        min-height: 100vh;
        padding-top: 20vh;
        padding-bottom: 15vh;
        color: #007bff;

        h3{
            font-size: inherit;
            display: inline-block;
        }
        a{
            text-decoration: underline;
        }
    }

    .project-element.dark{
        background: black;
    }


    .description{
        margin-top: calc(1vw - 5px);

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

    @include media-breakpoint-down(lg){
       .project-element .content{
            padding: 0;
        }

        .description{
            margin-top: calc(0.8vw - 5px);

        }
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
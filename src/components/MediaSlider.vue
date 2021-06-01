<template>
    <div class="media-slider content col-12 order-1 col-lg-8 order-lg-0">
        <p>{{ currentPage + 1 }}/{{ content.media.length }}</p>
        <div class="carousel-nav-button nav-left d-flex align-items-center">
            <button @click="navigateToPrevSlide"></button>
        </div>
        <Carousel
            v-model="currentPage"
            :per-page="1"
            :pagination-enabled="false"
            :navigation-enabled="false"
            pagination-active-color="rgba(0, 123, 255, 1)"
            pagination-color="rgba(0, 123, 255, .25)"
            :pagination-size="9"
            :class="carouselClassObject"
            @click.native="handleCarouselClick"
            @mousemove.native="handleCarouselMousemove"
            @mouseout.native="handleCarouselMouseout"
        >
            <Slide v-for="(slide, index) in content.media" :key="index">
                <VisualElement
                    :content="slide"
                    :standard-dimensions="standardContentDimensions"
                    :is-visible="inViewport && currentPage === index"
                ></VisualElement>
            </Slide>
        </Carousel>
        <div class="carousel-nav-button nav-right d-flex align-items-center">
            <button @click="navigateToNextSlide"></button>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import VisualElement from './VisualElement'
import { mapState } from 'vuex'

export default {
    name: 'MediaSlider',
    components: {
        Carousel,
        Slide,
        VisualElement,
    },
    props: ['content', 'inViewport'],
    data() {
        return {
            currentPage: 0,
            cursorPosition: '',
            carousel: undefined,
            standardContentDimensions: {
                width: 0,
                height: 0,
            },
        }
    },
    computed: {
        ...mapState(['is_touch']),
        carouselClassObject() {
            return {
                'cursor-right': this.cursorPosition === 'right',
                'cursor-left': this.cursorPosition === 'left',
            }
        },
    },
    created() {
        this.slideCount = this.content.media.length
    },
    mounted() {
        this.carousel = this.$el.getElementsByClassName('VueCarousel')[0]

        this.standardContentDimensions.width =
            this.carousel.getBoundingClientRect().width
        this.standardContentDimensions.height =
            (this.carousel.getBoundingClientRect().width / 4) * 3

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
    },
    methods: {
        navigateToPrevSlide() {
            console.log('prev')
            if (this.currentPage > 0) this.currentPage--
        },
        navigateToNextSlide() {
            console.log('next')
            if (this.currentPage + 1 < this.slideCount) this.currentPage++
        },
        handleCarouselClick(e) {
            return false
            if (!this.is_touch) {
                if (this.getLeftRightByEvent(e) === 'left') {
                    this.navigateToPrevSlide()
                } else {
                    this.navigateToNextSlide()
                }
            }
        },
        handleCarouselMousemove(e) {
            this.cursorPosition = this.getLeftRightByEvent(e)
        },
        handleCarouselMouseout(e) {
            this.cursorPosition = ''
        },
        getLeftRightByEvent(e) {
            const targetWidth = e.target.offsetWidth
            const targetLocation = e.offsetX
            return targetLocation <= targetWidth / 2 ? 'left' : 'right'
        },
        ariaHiddenHandler(index) {
            return () => (this.currentPage === index ? 'false' : 'true')
        },
    },
}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap-scss/functions';
@import '../../node_modules/bootstrap-scss/variables';
@import '../../node_modules/bootstrap-scss/mixins';
@import '../../node_modules/bootstrap-scss/grid';

.media-slider {
    // background: red;
    position: relative;

    .carousel-nav-button {
        position: absolute;
        top: 0;

        height: 100%;
        &.nav-left {
            left: 2em;
            z-index: 100;
            button::before {
                content: '\02c2';
            }
        }

        &.nav-right {
            right: 2em;
            button::before {
                content: '\02c3';
            }
        }
        button {
            background: none;
            border-radius: 3em;
            width: 3em;
            height: 3em;
            position: relative;
            border: none;
            &:hover,
            &:focus {
                background: rgba(200, 200, 200, 0.5);
            }
            &:before {
                // position: absolute;
                top: 0;
                left: 0;
                font-size: 2em;
                font-family: Arial, Helvetica, sans-serif;
                color: #007bff;
            }
        }
    }
}

.VueCarousel {
    width: 100%;
}

// .VueCarousel.cursor-right {
//     cursor: url(../assets/cursor-right.png), auto;
//     cursor: -webkit-image-set(url(../assets/cursor-right.png) 2x), auto;
// }

// .VueCarousel.cursor-left {
//     cursor: url(../assets/cursor-left.png), auto;
//     cursor: -webkit-image-set(url(../assets/cursor-left.png) 2x), auto;
// }

.VueCarousel-slide {
    figure {
        margin-bottom: 0;
    }
}

@include media-breakpoint-down(lg) {
    .project-element .media-slider {
        padding: 0;
    }
}
</style>

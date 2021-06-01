<template>
    <section class="media-slider content col-12 order-1 col-lg-8 order-lg-0">
        <p
            v-if="inViewport"
            class="visually-hidden"
            aria-live="polite"
            aria-atomic="true"
        >
            {{ progressDisplayContent }}
        </p>
        <p :id="sectionLabelIdOne" class="visually-hidden" hidden>
            {{ e(labels.projectContent) }}
        </p>
        <div
            class="carousel-nav-button nav-left align-items-center"
            :class="leftButtonClasses"
            :hidden="!leftButtonActive"
        >
            <button
                :aria-hidden="!leftButtonActive"
                :aria-label="e(labels.prevButton)"
                @click="navigateToPrevSlide"
            ></button>
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
        <div
            class="
                carousel-nav-button
                nav-right
                align-items-center
                justify-content-end
            "
            :hidden="!rightButtonActive"
            :class="rightButtonClasses"
        >
            <button
                :aria-hidden="!rightButtonActive"
                :aria-label="e(labels.nextButton)"
                @click="navigateToNextSlide"
            ></button>
        </div>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import VisualElement from './VisualElement'
import { mapState } from 'vuex'
import { labels } from '../assets/content'

export default {
    name: 'MediaSlider',
    components: {
        Carousel,
        Slide,
        VisualElement,
    },
    props: ['content', 'inViewport', 'labelledBy'],
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
        leftButtonActive() {
            return this.currentPage > 0
        },
        rightButtonActive() {
            return this.currentPage + 1 < this.content.media.length
        },
        leftButtonClasses() {
            return {
                hidden: !this.leftButtonActive,
                'd-flex': this.leftButtonActive,
            }
        },
        rightButtonClasses() {
            return {
                hidden: !this.rightButtonActive,
                'd-flex': this.rightButtonActive,
            }
        },
        progressDisplayContent() {
            return `${this.e(this.labels.item)} ${
                this.currentPage + 1
            } ${this.e(this.labels.ofLabel)} ${this.content.media.length}`
        },
        sectionLabelIdOne() {
            return 'project-content-' + this.labelledBy
        },
    },
    created() {
        this.slideCount = this.content.media.length
        this.labels = labels
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
        width: 20%;
        &.hidden {
            display: none;
        }
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
        &:hover button,
        & button:focus {
            background: rgba(220, 220, 220, 0.5);
            &::before {
                color: #007bff;
            }
        }
        button {
            background: none;
            border-radius: 3em;
            width: 3em;
            height: 3em;
            position: relative;
            border: none;
            &:before {
                top: 0;
                left: 0;
                font-size: 2em;
                font-family: Arial, Helvetica, sans-serif;
                color: transparent;
            }
        }
    }
}

.VueCarousel {
    width: 100%;
}

.VueCarousel.cursor-right {
    // cursor: url(../assets/cursor-right.png), auto;
    // cursor: -webkit-image-set(url(../assets/cursor-right.png) 2x), auto;
    .carousel-nav-button {
    }
}

.VueCarousel.cursor-left {
    // cursor: url(../assets/cursor-left.png), auto;
    // cursor: -webkit-image-set(url(../assets/cursor-left.png) 2x), auto;
}

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

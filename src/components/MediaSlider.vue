<template>
    <div class="content col-12 order-1 col-lg-8 order-lg-0">
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
                    :is-visible="projectInViewport && currentPage === index"
                ></VisualElement>
            </Slide>
        </Carousel>
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
    props: ['content'],
    data() {
        return {
            currentPage: 0,
            projectInViewport: false,
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
        handleCarouselClick(e) {
            if (!this.is_touch) {
                if (this.getLeftRightByEvent(e) === 'left') {
                    if (this.currentPage > 0) this.currentPage--
                } else {
                    if (this.currentPage + 1 < this.slideCount)
                        this.currentPage++
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
    },
}
</script>

<style lang="scss"></style>

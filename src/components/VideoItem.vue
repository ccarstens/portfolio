<template>
    <video loop playsinline :controls="is_touch" :muted="muted" :alt="alt">
        <source v-if="test" :data-src="videoUrl" />
    </video>
</template>

<script>
import { event } from '../event'
import { mapState } from 'vuex'
export default {
    name: 'VideoItem',
    props: ['play', 'src', 'alt'],
    data() {
        return {
            event,
            test: undefined,
            element: null,
        }
    },
    computed: {
        ...mapState(['is_touch', 'global_volume']),
        videoUrl() {
            return require('../' + this.test)
        },
        muted() {
            return !this.global_volume
        },
    },
    watch: {
        play(newPlayState, b) {
            this.updatePlay(newPlayState)
        },
        global_volume: function (to, from) {
            this.$el.volume = to
        },
    },
    created() {
        this.test = this.$props.src
    },
    mounted() {
        this.event.$on('av-hooked-element-to-canplay', (element) => {
            if (element === this.$el) {
                this.$el.addEventListener('canplay', () => {
                    this.playVideo()
                })
            }
        })
    },
    methods: {
        getInit() {
            return this.$el.dataset.init == 'true'
        },
        playVideo() {
            if (this.getInit() && this.play) {
                this.$el.play()
            }
        },
        pauseVideo() {
            if (this.getInit()) {
                this.$el.pause()
            }
        },
        updatePlay(play) {
            if (play) {
                this.playVideo()
            } else this.pauseVideo()
        },
    },
}
</script>

<style lang="scss">
video {
    max-width: 100%;
    max-height: 90vh;
    width: auto;
    object-fit: contain;
}
</style>

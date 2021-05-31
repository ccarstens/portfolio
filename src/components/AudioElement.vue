<template>
    <div class="audio-element" style="display: none">
        <audio controls data-lazy-load-triggered="false">
            <source :data-src="test" type="audio/mpeg" />
        </audio>
    </div>
</template>

<script>
import { event } from '../event'

import { mapState } from 'vuex'
export default {
    name: 'AudioElement',
    props: ['play', 'src'],
    data() {
        return {
            event,
            audio: undefined,
            playing: false,
            volume: 0,
            fadeIn: {
                inProgress: false,
                timeout: undefined,
            },
            fadeOut: {
                inProgress: false,
                timeout: undefined,
            },
        }
    },
    computed: {
        ...mapState(['global_volume']),
        test() {
            return require('../' + this.src)
        },
        prettyVolume() {
            return Math.trunc(this.volume * 100)
        },
        initialized() {
            return this.audio.dataset.lazyLoadTriggered === 'true'
        },
    },
    watch: {
        play(newPlayState) {
            if (newPlayState) this.playAudio()
            else {
                this.pauseAudio()
            }
            this.playing = newPlayState
        },
        global_volume: function (to, from) {
            if (to === 0 && this.playing) {
                this.pauseAudio()
            } else if (to === 1 && !this.playing) {
                this.playAudio()
            }
        },
    },
    mounted() {
        this.audio = this.$el.getElementsByTagName('audio')[0]
        this.audio.volume = 0

        this.event.$on('av-hooked-element-to-canplay', (element) => {
            if (element === this.audio) {
                this.audio.addEventListener('canplay', () => {
                    this.playAudio()
                })
            }
        })
    },
    methods: {
        getInit() {
            return this.audio.dataset.init == 'true'
        },
        playAudio() {
            if (this.getInit() && this.global_volume && this.play) {
                this.audio.play()
                this.playing = true
                this.increaseVolumeStepwise()
            }
        },
        pauseAudio() {
            if (this.getInit()) {
                this.decreaseVolumeStepwise(() => this.audio.pause())
                this.playing = false
            }
        },
        setVolume(newValue) {
            if (newValue > 1) this.volume = 1
            else if (newValue < 0) this.volume = 0
            else this.volume = newValue

            this.audio.volume = this.volume
        },
        increaseVolumeStepwise() {
            if (this.fadeOut.inProgress) {
                this.stopFadeOut()
            }
            this.fadeIn.inProgress = true
            this.fadeIn.timeout = setTimeout(() => {
                if (this.volume < 1) {
                    this.setVolume(this.volume + 0.05)
                    this.increaseVolumeStepwise()
                } else {
                    this.fadeIn.inProgress = false
                }
            }, 25)
        },
        decreaseVolumeStepwise(callback = () => {}) {
            if (this.fadeIn.inProgress) this.stopFadeIn()

            this.fadeOut.inProgress = true
            this.fadeOut.timeout = setTimeout(() => {
                if (this.volume > 0) {
                    this.setVolume(this.volume - 0.05)
                    this.decreaseVolumeStepwise(callback)
                } else {
                    callback()
                    this.fadeOut.inProgress = false
                }
            }, 25)
        },
        stopFadeOut() {
            clearTimeout(this.fadeOut.timeout)
            this.fadeOut.inProgress = false
        },
        stopFadeIn() {
            clearTimeout(this.fadeIn.timeout)
            this.fadeIn.inProgress = false
        },
    },
}
</script>

<style scoped></style>

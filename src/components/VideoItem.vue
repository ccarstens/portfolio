<template>
    <video loop playsinline :controls="state.getIsTouch()" :muted="muted">
        <source v-if="test" :data-src="videoUrl">
    </video>
</template>

<script>
    import state from '../state'
    import {event} from '../event'
export default {
    name: 'VideoItem',
    props: [
        'play',
        'src'
    ],
    data () {
        return {
            state,
            event,
            test: undefined,
            element: null,
        }
    },
    created () {
        this.test = this.$props.src
    },
    mounted () {
        this.event.$on('av-hooked-element-to-canplay', (element) => {
            if(element === this.$el){
                this.$el.addEventListener('canplay', () => {
                    this.playVideo()
                })
            }
        })
    },
    computed: {
        videoUrl(){
            return require('../' + this.test)
        },
        muted(){
            return !this.state.state.globalVolume
        }
    },
    methods: {
        getInit(){
            return this.$el.dataset.init == 'true'
        },
        playVideo(){
            if(this.getInit() && this.play){
                this.$el.play()
            }
        },
        pauseVideo(){
            if(this.getInit()){
                this.$el.pause()
            }
        },
        updatePlay (play) {
            if(play){
                this.playVideo()
                // this.$el.webkitEnterFullScreen()
            }
            else this.pauseVideo()
        }
    },
    watch: {
        play (newPlayState, b) {
            this.updatePlay(newPlayState)
        },
        'state.state.globalVolume': function(to, from){
            this.$el.volume = to
        }
    }
}
</script>

<style lang="scss">
    video{
        max-width: 100%;
        max-height: 90vh;
        width: 100%;
        object-fit: contain;
    }
</style>

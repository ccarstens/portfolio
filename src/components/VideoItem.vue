<template>
    <video @load="init" autoplay loop playsinline :controls="state.getIsTouch()">
        <source v-if="test" :data-src="videoUrl">
    </video>
</template>

<script>
    import state from '../state'
export default {
    name: 'VideoItem',
    props: [
        'play',
        'src'
    ],
    data () {
        return {
            state: state,
            test: undefined,
        }
    },
    created () {
        this.test = this.$props.src
    },
    mounted () {
        // this.updatePlay(this.$props.play)
    },
    computed: {
        videoUrl(){
            return require('../' + this.test)
        }
    },
    methods: {
        init () {
            this.$el.play()
        },
        updatePlay (play) {
            if(play){
                this.$el.play()
                // this.$el.webkitEnterFullScreen()
            }
            else this.$el.pause()
        }
    },
    watch: {
        play (newPlayState, b) {
            this.updatePlay(newPlayState)
        }
    }
}
</script>

<style lang="scss">
    video{
        max-width: 100%;
    }
</style>

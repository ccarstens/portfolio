<template>
    <video @load="init" loop playsinline :controls="state.getIsTouch()" :muted="muted">
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
            state,
            test: undefined,
            element: null,
        }
    },
    created () {
        this.test = this.$props.src
    },
    mounted () {

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
    }
</style>

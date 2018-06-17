<template>
    <video @load="init" autoplay loop>
        <source v-if="srcUrl" :src="absoluteSrcUrl">
    </video>
</template>

<script>
export default {
    name: 'VideoItem',
    props: [
        'play',
        'src'
    ],
    data () {
        return {
            srcUrl: undefined,
        }
    },
    created () {
        this.srcUrl = this.$props.src
    },
    mounted () {
        // this.updatePlay(this.$props.play)
    },
    computed: {
        absoluteSrcUrl(){
            return require('../' + this.srcUrl)
        }
    },
    methods: {
        init () {
            this.$el.play()
        },
        updatePlay (play) {
            if(play) this.$el.play()
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

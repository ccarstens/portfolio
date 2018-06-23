<template>
    <video @load="init" autoplay loop muted playsinline>
        <source v-if="test" :src="absolutetest">
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
        absolutetest(){
            return require('../' + this.test)
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

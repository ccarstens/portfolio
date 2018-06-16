<template>
    <video @load="init" autoplay>
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
        console.log(this.$props.src)
        this.srcUrl = this.$props.src
    },
    mounted () {
        this.$el.load()
        this.updatePlay(this.$props.play)
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

<style scoped>

</style>

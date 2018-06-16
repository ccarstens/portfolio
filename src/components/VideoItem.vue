<template>
    <video v-on:load="init" :src="srcUrl"></video>

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
            srcUrl: ''
        }
    },
    created () {
        console.log(this.$props.src)
        this.srcUrl = this.$props.src
    },
    mounted () {
        this.updatePlay(this.$props.play)
        console.log(this.$el)
    },
    methods: {
        init () {
            this.$el.play()
        },
        updatePlay (play) {
            if(play) this.$el.play()
            else this.$el.pause()
        },
        changeSource(){
            this.srcUrl = '../assets/scrollcast_1.mp4'
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

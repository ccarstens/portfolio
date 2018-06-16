<template>
  <div id="app">
    <VideoItem :play="play" :src="src"></VideoItem>

      <button @click="changeValue">Test</button>
  </div>
</template>

<script>
import VideoItem from './components/VideoItem'

export default {
    name: 'App',
    data () {
        return {
            play: true,
            src: '../assets/scrollcast_1.mp4'
        }
    },
    methods: {
        changeValue () {
            this.play = !this.play
        }
    },
    components: {
        VideoItem
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

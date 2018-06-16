<template>
  <div id="app">
      <ProjectElement :content="projectContent"/>
    <!--<VideoItem :play="play" :src="src"></VideoItem>-->
  </div>
</template>

<script>
import VideoItem from './components/VideoItem'
import ProjectElement from './components/ProjectElement'

export default {
    name: 'App',
    data () {
        return {
            play: true,
            src: 'assets/scrollcast_1.mp4',
            projectContent: {
                title: 'EEE',
                year: 2016,
                description: 'fashion magazine that uses verses of a poem generated using <i>pattern</i> an NLP library',
                url: 'http://goetze.xyz',
                globalAudio: {
                   src: 'assets/audio.mp3'
                },
                media: [
                    {
                        src: 'assets/01_EEE_CORNELIUS_CARSTENS.jpg'
                    },
                    {
                        src: 'assets/scrollcast_1.mp4'
                    }
                ]
            }
        }
    },
    methods: {
        changeValue () {
            this.play = !this.play
        }
    },
    components: {
        ProjectElement,
        VideoItem
    }
}
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #000;
    margin-top: 60px;
}
</style>

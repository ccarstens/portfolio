<template>
  <div id="app">
      <ProjectElement v-for="(project, key) in projects" :key="key" :content="project"/>

  </div>
</template>

<script>
import ProjectElement from './components/ProjectElement'

export default {
    name: 'App',
    data () {
        return {

            projects: [
                {
                    title: 'EEE',
                    year: 2016,
                    description: 'fashion magazine that uses verses of a poem generated using <i>pattern</i> an NLP library',
                    url: 'http://goetze.xyz',
                    globalAudio: {
                        src: 'assets/audio.mp3'
                    },
                    media: [
                        {
                            src: 'assets/01_EEE_CORNELIUS_CARSTENS.jpg',
                            description: 'Application of the verses'
                        },
                    ]
                },
                {
                    title: 'Marius Hirschel',
                    year: 2016,
                    description: 'custom portfolio for berlin based hair stylist',
                    url: 'http://mariushirschel.com',
                    media: [

                        {
                            src: 'assets/scrollcast_1.mp4',
                            description: 'Fadings applied'
                        },
                        {
                            src: 'assets/01_MARIUS_CORNELIUS_CARSTENS.png',
                            description: 'Front Page of Marius Hirschel'
                        }
                    ]
                }
            ]
        }
    },
    methods: {

    },
    components: {
        ProjectElement,
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

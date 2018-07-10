<template>
  <div id="app" :class="classObject">

      <HeaderElement/>
      <!--<button @click="switchGerman">Deutsch</button>-->
      <AudioActivation @click="initAudioElements"></AudioActivation>

      <AboutElement
              :text="e(content.about)"
      />
      <!--<P5Sketch name="DotCloud"></P5Sketch>-->

      <ProjectElement v-for="(project, key) in content.projects" :key="key" :content="project"/>

  </div>
</template>

<script>
import HeaderElement from './components/HeaderElement'
import ProjectElement from './components/ProjectElement'
import AboutElement from './components/AboutElement'
import AudioElement from './components/AudioElement'
import P5Sketch from './components/P5Sketch'
import AudioActivation from './components/AudioActivation'

import state from './state'
import e from './localizedContent'

import mainContent from './assets/content'

export default {
    name: 'App',
    components: {
        ProjectElement,
        HeaderElement,
        AboutElement,
        AudioElement,
        P5Sketch,
        AudioActivation
    },
    data () {
        return{
            content: mainContent,
            state: state,
            name: "DotCloud"
        }
    },
    created(){
        this.state.setIsTouch(typeof window !== "undefined" && "ontouchstart" in window)
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                this.loadImages()
                this.loadVideos()
            }, 1200)
        })

    },
    methods: {
        e,
        initAudioElements(){
            const audioElements = this.$el.getElementsByTagName('audio')
            const audioElementCount = audioElements.length

            for(let i = 0; i < audioElementCount; i++){
                this.initAudioElement(audioElements[i])
            }
        },
        initAudioElement(audioElement){
            audioElement.play().then(() => audioElement.pause())

        },
        loadVideos(){
            const videos = this.$el.getElementsByTagName('video')
            for(let i = 0; i < videos.length; i++){
                const video = videos[i]
                const source = videos[i].getElementsByTagName('source')[0]
                source.src = source.dataset.src
                video.load()
            }

            if(this.state.debug) console.log('Lazy loaded video content for', videos.length, 'videos')
        },
        loadImages(){
            const images = this.$el.getElementsByTagName('img')
            for(let i = 0; i < images.length; i++){
                const img = images[i]
                img.src = img.dataset.src
            }
            if(this.state.debug) console.log('Lazy loaded image content for', images.length, 'images')
        }
    },
    computed: {
        classObject(){
            return {
                hide: this.state.getLanguageSwitcherInAction(),
                'no-hover': this.state.getIsTouch()
            }
        }
    },
    watch: {
        mainData: {
            handler: function(newData){
                this.content = newData
            },
            deep: true
        }
    },
}
</script>

<style lang="scss">

    @import '../node_modules/bootstrap-scss/functions';
    @import '../node_modules/bootstrap-scss/variables';
    @import '../node_modules/bootstrap-scss/mixins';


    @import '../node_modules/bootstrap-scss/reboot';
    @import '../node_modules/bootstrap-scss/images';
    @import '../node_modules/bootstrap-scss/grid';

    @import '../node_modules/bootstrap-scss/utilities/display';
    @import '../node_modules/bootstrap-scss/utilities/flex';
    @import '../node_modules/bootstrap-scss/utilities/position';
    @import '../node_modules/bootstrap-scss/utilities/spacing';
    @import '../node_modules/bootstrap-scss/utilities/text';

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #007bff;
    margin-top: 60px;

    opacity: 1;
    transition: opacity 300ms ease-out;
}
    #app.hide{
        opacity: 0;
    }

    // -up-FROM
    @include media-breakpoint-up(xs){
        #app{
            font-size: 1.25rem;
        }
    }

    @include media-breakpoint-up(sm){

        #app{
            font-size: 1.375rem;
        }

        #site-header, #about{
            font-size: 1.5rem;
        }



    }

    @include media-breakpoint-up(md){
        #app{

        }
    }


</style>

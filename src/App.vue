<template>
  <div id="app" class="">

      <HeaderElement/>
      <!--<button @click="switchGerman">Deutsch</button>-->
      <button @click="initAudioElements">audio</button>
      <AboutElement
              :text="fullData.content.about"
      />

      <ProjectElement v-for="(project, key) in fullData.content.projects" :key="key" :content="project"/>

  </div>
</template>

<script>
import HeaderElement from './components/HeaderElement'
import ProjectElement from './components/ProjectElement'
import AboutElement from './components/AboutElement'
import AudioElement from './components/AudioElement'

import state from './state'


export default {
    name: 'App',
    props: [
        'mainData'
    ],
    data () {
        return{
            fullData: {},
            state: state,
        }
    },
    methods: {
        switchGerman(){

            this.$root.switchToGerman()


        },
        initAudioElements(){
            const audioElements = this.$el.getElementsByTagName('audio')
            const audioElementCount = audioElements.length

            for(let i = 0; i < audioElementCount; i++){
                this.initAudioElement(audioElements[i])
            }
        },
        initAudioElement(audioElement){
            audioElement.play().then(() => audioElement.pause())

        }
    },
    created(){
        this.fullData = this.$props.mainData

    },
    watch: {
        mainData: {
            handler: function(newData){
                this.fullData = newData
            },
            deep: true
        }
    },
    components: {
        ProjectElement,
        HeaderElement,
        AboutElement,
        AudioElement
    }
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

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #000;
    margin-top: 60px;
}

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

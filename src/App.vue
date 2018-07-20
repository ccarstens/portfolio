<template>
  <div id="app" :class="classObject" @touchstart="initPendingMedia" @mousedown="initPendingMedia">

      <HeaderElement/>
      <!--<button @click="switchGerman">Deutsch</button>-->
      <AudioActivation @click=""></AudioActivation>
      <AboutElement
              :text="e(content.about)"
      />
      <!--<P5Sketch name="DotCloud"></P5Sketch>-->

      <div id="projects">
        <ProjectElement v-for="(project, key) in content.projects" :key="key" :content="project"/>
      </div>
      <footer class="container-fluid">
          <div class="row">
              <div class="col offset-md-1">
                  <p>Cornelius Carstens</p>
                  <p>Sredzkistr. 30 <br>
                      10435 Berlin <br>
                      Germany</p>
                  <p><a href="mailto:test@test.de">Mail</a> <a href="http://github.com/ccarstens" target="_blank">GitHub</a></p>
                  <p>VAT: DE314889795 </p>
              </div>
          </div>
      </footer>

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
import av from './av'

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
            state,
            av,
            content: mainContent,
            name: "DotCloud",
            mediaElements: null,
            loadedMediaElementsCount: 0,
            toInitialize: [],
        }
    },
    created(){
        this.state.setIsTouch(typeof window !== "undefined" && "ontouchstart" in window)

        this.av.init()

    },
    methods: {
        e,
        initPendingMedia(){
            this.av.initPendingMedia()
        },
    },
    computed: {
        classObject(){
            return {
                hide: this.state.getLanguageSwitcherInAction(),
                'no-hover': this.state.getIsTouch()
            }
        },
    },
    watch: {
        mainData: {
            handler: function(newData){
                this.content = newData
            },
            deep: true
        },
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
    /*margin-top: 60px;*/

    opacity: 1;
    transition: opacity 300ms ease-out;
}
    #app.hide{
        opacity: 0;
    }

    a{
        text-decoration: underline;
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

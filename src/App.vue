<template>
  <div id="app" class="">
      <HeaderElement></HeaderElement>
      <AboutElement v-html="fullData.content.about"/>
      <button @click="switchGerman">Deutsch</button>
      <ProjectElement v-for="(project, key) in fullData.content.projects" :key="key" :content="project"/>

  </div>
</template>

<script>
import HeaderElement from './components/HeaderElement'
import ProjectElement from './components/ProjectElement'
import AboutElement from './components/AboutElement'


export default {
    name: 'App',
    props: [
        'mainData'
    ],
    data () {
        return{
            fullData: {}
        }
    },
    methods: {
        switchGerman(){

            this.$root.switchToGerman()


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
        AboutElement
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
</style>

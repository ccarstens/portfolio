<template>
    <div id="wrapper" :class="wrapperClassObject">
        <HeaderElement/>
        <AboutElement
                :text="e(content.about)"
        />

        <div id="projects">
            <ProjectElement v-for="(project, key) in content.projects" :key="key" :content="project"/>
        </div>
        <footer class="container-fluid">
            <div class="row">
                <div class="col offset-md-1">
                    <p>Cornelius Carstens</p>
                    <p>Warthestr. 46 <br>
                        12051 Berlin <br>
                        Germany</p>
                    <p><a href="mailto:cornelius.carstens@me.com">Mail</a> <a href="http://github.com/ccarstens" target="_blank">GitHub</a></p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import HeaderElement from './HeaderElement'
import ProjectElement from './ProjectElement'
import AboutElement from './AboutElement'

import {content} from '../assets/content'
import state from '../state'
import e from '../localizedContent'



export default {
    name: 'Wrapper',
    components: {
        ProjectElement,
        HeaderElement,
        AboutElement
    },
    data () {
        return{
            state,
            content,
            mediaElements: null,
            loadedMediaElementsCount: 0,
            toInitialize: [],
        }
    },
    methods: {
        e
    },
    computed: {
        wrapperClassObject(){
            return {
                hide: !this.state.getIsTouch()
                        // && !this.state.getCanAutoplayAudio()
                    && !this.state.getAudioActivationFinished()
            }
        }
    }
}
</script>

<style lang="scss">

    .no-audio-activation #wrapper{
        top: 30vh;
    }

    #wrapper{
        height: auto;
        overflow: auto;
        opacity: 1;
        -webkit-transition: opacity 300ms ease-in-out;
        transition: opacity 300ms ease-in-out;

        margin-top: 50vh;
        /*position: relative;*/
        /*<!--top: -30vh;-->*/
    }

    #wrapper.hide{
        height: 0;
        
        & .about, 
        .projects, 
        footer, 
        .language-switcher, 
        .global-audio-control, 
        .projects-link,
        .masthead .possessive{
            opacity: 0;
        }

    }
</style>
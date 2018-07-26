<template>
    <div v-if="!removeActivation" :class="classObject">
        <div class="m-auto test-image">
            <P5Sketch name="DotCloud" :dimensions="{width: sketchWidth, height: sketchHeight}"></P5Sketch>
        </div>
        <div v-if="true === false">
        <a
                @click.prevent="initMedia"
                @touchstart="$emit('click')"
                href="#">
            <span class="word">{{e(labels.click)}}</span><br><span v-if="false" class="emoji">🔈</span>
            <!--<span v-else-if="inProgress" class="emoji progress">🏃🏻‍️️</span>-->
            <span v-else class="emoji">🔊</span>
            <!--<span>{{browserCanAutoplay}}</span>-->

        </a>
        </div>
    </div>
</template>

<script>
    import {labels} from '../assets/content'
    import state from '../state'
    import e from '../localizedContent'
    import av from '../av'
    import {event} from '../event'

    import P5Sketch from './P5Sketch'
    export default {
        name: "AudioActivation",
        components: {
            P5Sketch
        },
        data(){
            return {
                labels,
                state,
                av,
                event,
                userInteracted: false,

            }
        },
        created(){
            this.event.$on('user-interacted-with-sketch', () => {
                setTimeout(() => {
                    this.state.setAudioActivationFinished(true)
                }, 300)
            })
        },
        mounted(){
        },
        methods: {
            e,
            initMedia(){
                this.userInteracted = true
            }
        },
        computed: {
            test(){
                let x = 'assets/play-button.png'
                return require('../' + x)
            },
            removeActivation(){
                return (
                    this.state.getIsTouch()
                    // || this.state.getCanAutoplayAudio()
                    // || (
                    //     !this.state.getIsTouch()
                    //     && this.state.getAudioActivationFinished()
                    // )
                )

                // return false
            },
            sketchWidth(){
                return window.innerWidth
            },
            sketchHeight(){
                return window.innerHeight
            },
            classObject(){
                return {
                    'd-flex': true,
                    'flex-wrap': true,
                    'justify-content-center': true,
                    'audio-activation': true,
                    // 'show': !this.state.getIsTouch()
                    //         && !this.state.getCanAutoplayAudio()
                    //         && this.av.toInitialize.length > 0
                    // ,
                    'show': true,
                    'fixed-top': true

                }
            },
        },
        watch: {

        }
    }
</script>

<style lang="scss" scoped>


    .test-image{
        width: 100%;
        height: 100vh;
        /*background: url(../assets/play-button.png) no-repeat center center;*/
    }

    .audio-activation{

        opacity: 0;
        pointer-events: none;

        transition: opacity 300ms ease-out;

        /*margin-top: 2em;*/
        /*margin-bottom: 2em;*/
        /*font-size: 10em;*/
        font-size: 0;

        z-index: -1000;

        width: 100%;
        height: 100%;


        .word{
            text-decoration: underline;
        }

        .emoji.progress{
            display: inline-block;
            -moz-transform: scale(-1, 1);
            -webkit-transform: scale(-1, 1);
            -o-transform: scale(-1, 1);
            -ms-transform: scale(-1, 1);
            transform: scale(-1, 1);
        }

        a{
            text-decoration: none;
        }

        a:hover{
            text-decoration: none;

            .word{
                text-decoration: underline;
            }
        }
    }
    .show{
        opacity: 1;
        pointer-events: auto;
    }

</style>
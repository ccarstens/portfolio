<template>
    <div v-if="!removeActivation" :class="classObject">
        <a
                @click="userInteracted = true"
                @touchstart="$emit('click')"
                href="#">
            <span class="word">{{e(labels.click)}}</span><span v-if="false" class="emoji">🔈</span>
            <!--<span v-else-if="inProgress" class="emoji progress">🏃🏻‍️️</span>-->
            <span v-else class="emoji">🔊</span>
            <!--<span>{{browserCanAutoplay}}</span>-->

        </a>
    </div>
</template>

<script>
    import {labels} from '../assets/content'
    import state from '../state'
    import e from '../localizedContent'
    import av from '../av'
    export default {
        name: "AudioActivation",
        data(){
            return {
                labels,
                state,
                av,
                userInteracted: false,

            }
        },
        created(){

        },
        mounted(){
        },
        methods: {
            e,
            initMedia(){
                // this.user
            }
        },
        computed: {
            removeActivation(){
                return this.state.getCanAutoplayAudio() || this.state.getIsTouch()
            },
            classObject(){
                return {
                    'd-flex': true,
                    'justify-content-center': true,
                    'audio-activation': true,
                    'show': !this.state.getIsTouch()
                            && !this.state.getCanAutoplayAudio()
                            && this.av.toInitialize.length > 0
                            && !this.userInteracted
                    ,
                }
            },
        },
        watch: {

        }
    }
</script>

<style lang="scss" scoped>


    .audio-activation{

        opacity: 0;
        pointer-events: none;

        transition: opacity 300ms ease-out;

        margin-top: 2em;
        margin-bottom: 2em;
        font-size: 4em;

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
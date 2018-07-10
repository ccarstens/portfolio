<template>
    <div class="d-flex justify-content-center audio-activation">
        <a
                @click.once.prevent="initAudioElements"
                @touchstart="$emit('click')"
                href="#">
            <span class="word">{{e(labels.click)}}</span>&nbsp;
            <span v-if="everythingInitialized" class="emoji">✅</span>
            <!--<span v-else-if="inProgress" class="emoji progress">🏃🏻‍️️</span>-->
            <span v-else class="emoji">🔊</span>

        </a>
    </div>
</template>

<script>
    import {labels} from '../assets/content'
    import state from '../state'
    import e from '../localizedContent'
    export default {
        name: "AudioActivation",
        data(){
            return {
                labels,
                state,
                audioGivingElements: null,
                initializedElements: 0,
                inProgress: false,
            }
        },
        created(){

        },
        methods: {
            e,
            initAudioElements(){
                this.inProgress = true
                this.audioGivingElements = document.querySelectorAll('audio, video')
                console.log(this.audioGivingElements.length)
                for(let i = 0; i < this.audioGivingElements.length; i++){
                    this.initAudioElement(this.audioGivingElements[i])
                }
            },
            initAudioElement(audioElement){
                audioElement.play().then(() => {
                    audioElement.pause()
                    this.initializedElements++
                    if(this.everythingInitialized) setTimeout(() => this.inProgress = false, 400)
                })

            },
        },
        computed: {
            everythingInitialized(){
                const condition = this.audioGivingElements && this.initializedElements === this.audioGivingElements.length
                if(condition) this.state.setAudioInitialized(true)
                return condition
            }
        }
    }
</script>

<style lang="scss" scoped>
    .audio-activation{
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

        a:hover{
            text-decoration: none;

            .word{
                text-decoration: underline;
            }
        }
    }
</style>
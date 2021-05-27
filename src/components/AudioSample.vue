<template>
    <div class="audio-sample">
        <button @click="togglePlay"><span class="text">Audio Sample:</span>
        <br>
        <span class="emoji">{{playEmoji}}</span></button>
        <AudioElement :src="src" :play="playing"></AudioElement>
    </div>
</template>

<script>
import AudioElement from './AudioElement'
export default {
    name: "AudioSample",
    components: {
        AudioElement
    },
    props: ['src'],
    data(){
        return {
            playing: false
        }
    },
    methods: {
        togglePlay(){
            this.playing = !this.playing
        }
    },
    computed: {
        playEmoji(){
            return this.playing ? "⏸" : "⏯"

        },
        playLabel(){
            return this.playing ? "Stop" : "Play"
        }
    }
}
//p3mbp4m
</script>
<style lang="scss">
.audio-sample{
    button{
        border: none;
        background: none;
        color: #007bff;
        text-align: left;

        .emoji{
            font-size: 3em;
        }
    }
}
</style>
<template>
    <div class="audio-sample">
        <button
            role="switch"
            :aria-checked="playing"
            :aria-label="e(buttonLabels)"
            @click="togglePlay"
        >
            <span class="text">Audio Sample:</span>
            <br />
            <span class="emoji">{{ playEmoji }}</span>
        </button>
        <AudioElement :src="src" :play="playing"></AudioElement>
    </div>
</template>

<script>
import AudioElement from './AudioElement'
import { labels } from '../assets/content'
export default {
    name: 'AudioSample',
    components: {
        AudioElement,
    },
    props: ['src'],
    data() {
        return {
            playing: false,
        }
    },
    computed: {
        playEmoji() {
            return this.playing ? '⏸' : '⏯'
        },
        playLabel() {
            return this.playing ? 'Stop' : 'Play'
        },
        idStringLabel() {
            return 'audio-sample-label' + this.uuid
        },
        buttonLabels() {
            return labels.playAudioSample
        },
    },
    methods: {
        togglePlay() {
            this.playing = !this.playing
        },
    },
}
//p3mbp4m
</script>
<style lang="scss">
.audio-sample {
    button {
        border: none;
        background: none;
        color: #007bff;
        text-align: left;

        .emoji {
            font-size: 3em;
        }
    }
}
</style>

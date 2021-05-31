<template>
    <div :class="classObject" class="global-audio-control">
        <button
            :tabindex="tabIdx"
            role="switch"
            :aria-checked="isOn"
            aria-label="audio output"
            @click="handleChange"
        >
            <span v-if="isOn">🔊</span>
            <span v-else>🔈</span>
        </button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'GlobalAudioControl',
    computed: {
        ...mapState([
            'can_autoplay_audio',
            'global_volume',
            'min_one_media_element_init',
        ]),
        isOn() {
            return this.global_volume === 1
        },
        tabIdx() {
            return this.audioInitialized ? 0 : -1
        },
        audioInitialized() {
            return this.can_autoplay_audio || this.min_one_media_element_init
        },
        classObject() {
            return {
                show: this.audioInitialized,
            }
        },
    },
    methods: {
        ...mapMutations(['SET_GLOBAL_VOLUME']),
        handleChange() {
            if (this.global_volume === 1) {
                this.SET_GLOBAL_VOLUME(0)
            } else {
                this.SET_GLOBAL_VOLUME(1)
            }
        },
    },
}
</script>

<style lang="scss">
.global-audio-control {
    opacity: 0;

    transition: opacity 300ms ease-in-out;
    position: relative;
    top: -0.2em;

    button {
        background: none;
        border: none;
        pointer-events: auto;
        cursor: pointer;
    }

    &.show {
        opacity: 1;
        pointer-events: auto;
    }
}
</style>

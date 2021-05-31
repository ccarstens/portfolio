<template>
    <button
        :class="classObject"
        class="global-audio-control"
        @click="handleChange"
    >
        <span v-if="global_volume === 1">🔊</span>
        <span v-else>🔈</span>
    </button>
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
        classObject() {
            return {
                show:
                    this.can_autoplay_audio || this.min_one_media_element_init,
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

<style lang="scss" scoped>
button:focus {
    outline: none;
}

button {
    opacity: 0;
    pointer-events: none;

    background: none;
    border: none;
    pointer-events: auto;
    cursor: pointer;

    transition: opacity 300ms ease-in-out;
    position: relative;
    top: -0.2em;
}

.show {
    opacity: 1;
    pointer-events: auto;
}
</style>

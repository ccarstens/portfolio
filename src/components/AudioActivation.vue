<template>
    <div v-if="!removeActivation" :class="classObject">
        <div class="m-auto test-image">
            <P5Sketch
                name="DotCloud"
                @user-interaction="removeOverlay"
                :dimensions="{ width: sketchWidth, height: sketchHeight }"
            ></P5Sketch>
        </div>
    </div>
</template>

<script>
import { labels } from '../assets/content'
import av from '../av'

import P5Sketch from './P5Sketch'

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'AudioActivation',
    components: {
        P5Sketch,
    },
    data() {
        return {
            labels,
            av,
            userInteracted: false,
        }
    },
    computed: {
        ...mapState(['is_touch']),
        removeActivation() {
            return this.is_touch
        },
        sketchWidth() {
            return window.innerWidth
        },
        sketchHeight() {
            return window.innerHeight
        },
        classObject() {
            return {
                'd-flex': true,
                'flex-wrap': true,
                'justify-content-center': true,
                'audio-activation': true,
                show: true,
                'fixed-top': true,
            }
        },
    },
    mounted() {},
    methods: {
        ...mapMutations(['SET_AUDIO_ACTIVATION_FINISHED']),
        ...mapActions(['removeOverlay']),
        initMedia() {
            this.userInteracted = true
        },
    },
}
</script>

<style lang="scss" scoped>
.test-image {
    width: 100%;
    height: 100vh;
    /*background: url(../assets/play-button.png) no-repeat center center;*/
}

.audio-activation {
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

    .word {
        text-decoration: underline;
    }

    .emoji.progress {
        display: inline-block;
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;

        .word {
            text-decoration: underline;
        }
    }
}
.show {
    opacity: 1;
    pointer-events: auto;
}
</style>

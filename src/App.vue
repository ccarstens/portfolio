<template>
    <div
        id="app"
        :class="classObject"
        @touchstart="initPendingMedia"
        @mousedown="initPendingMedia"
    >
        <AudioActivation></AudioActivation>
        <router-view></router-view>
    </div>
</template>

<script>
import AudioActivation from './components/AudioActivation'

import av from './av'
import { defaultLocale } from './locales'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'App',
    components: {
        AudioActivation,
    },
    data() {
        return {
            av,
        }
    },
    computed: {
        ...mapState([
            'locale_switch_in_action',
            'is_touch',
            'can_autoplay_audio',
            'audio_activation_finished',
        ]),
        classObject() {
            return {
                hide: this.locale_switch_in_action,
                'no-hover': this.is_touch,
                'no-audio-activation':
                    (this.can_autoplay_audio &&
                        !this.audio_activation_finished) ||
                    this.is_touch,
            }
        },
    },
    created() {
        this.SET_IS_TOUCH(
            typeof window !== 'undefined' && 'ontouchstart' in window
        )

        document.querySelector('html').setAttribute('lang', defaultLocale)

        this.av.init()
    },
    methods: {
        ...mapMutations(['SET_IS_TOUCH']),
        initPendingMedia() {
            this.av.initPendingMedia()
        },
    },
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
@import '../node_modules/bootstrap-scss/utilities/spacing';
@import '../node_modules/bootstrap-scss/utilities/text';

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #007bff;

    opacity: 1;
    transition: opacity 300ms ease-out;

    &.hide {
        opacity: 0;
    }
}
a {
    text-decoration: underline;
}

// -up-FROM
@include media-breakpoint-up(xs) {
    #app {
        font-size: 1.25rem;
    }
}

@include media-breakpoint-up(sm) {
    #app {
        font-size: 1.375rem;
    }

    #site-header,
    #about {
        font-size: 1.5rem;
    }
}
</style>

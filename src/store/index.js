import Vue from 'vue'
import Vuex from 'vuex'
import { defaultLocale } from '../locales'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        version: '1.0.0',
        locale: defaultLocale,
        locale_switch_in_action: false,
        is_touch: false,
        can_autoplay_audio: false,
        global_volume: 1,
        min_one_media_element_init: false,
        audio_activation_finished: false,
    },
    mutations: {
        SET_LOCALE(state, locale) {
            state.locale = locale
        },
        SET_LOCALE_SWITCH_IN_ACTION(state, inAction) {
            state.locale_switch_in_action = inAction
        },
        SET_IS_TOUCH(state, touch) {
            state.is_touch = touch
        },
        SET_CAN_AUTOPLAY_AUDIO(state, canAutoplay) {
            state.can_autoplay_audio = canAutoplay
        },
        SET_GLOBAL_VOLUME(state, volume) {
            state.global_volume = volume
        },
        SET_MIN_ONE_MEDIA_ELEMENT_INIT(state, init) {
            state.min_one_media_element_init = init
        },
        SET_AUDIO_ACTIVATION_FINISHED(state, finished) {
            state.audio_activation_finished = finished
        },
    },
    actions: {},
    getters: {},
})

export { store }
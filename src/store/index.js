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
    },
    actions: {},
    getters: {},
})

export { store }
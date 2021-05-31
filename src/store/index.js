import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        version: '1.0.0',
        header_offset: 0,
    },
    mutations: {
        SET_HEADER_OFFSET(state, offset) {
            this.header_offset = offset
        },
    },
    actions: {
        setHeaderOffset({ commit }, offset) {
            commit('SET_HEADER_OFFSET', offset)
        },
    },
    getters: {},
})
import Vue from 'vue'
import Router from 'vue-router'
import {defaultLocale} from '../locales'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: `/${defaultLocale}`
        },
        {
            path: '/:locale',
            component: {
                // template: '<router-view />'
            }
        }
    ]

})
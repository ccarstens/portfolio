import Vue from 'vue'
import Router from 'vue-router'
import {defaultLocale} from '../locales'
import Wrapper from '../components/Wrapper'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: `/${defaultLocale}`,
            component: Wrapper
        },
        {
            path: '/:locale',
            component: Wrapper,

        }
    ]

})
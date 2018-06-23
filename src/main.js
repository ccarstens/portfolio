// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'intersection-observer'
import Vue from 'vue'
import App from './App'
import VueObserveVisibility from 'vue-observe-visibility'

import contentEn from './assets/content.en'
import contentDe from './assets/content.de'


Vue.config.productionTip = false
Vue.use(VueObserveVisibility)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    data: {
        mainContent: {
            content: contentEn
        }
    },
    methods: {
        switchToGerman(){
            const copyContent = JSON.parse(JSON.stringify(this.mainContent))
            copyContent.content = contentDe
            this.mainContent = copyContent
        }
    },
    template: `<App :mainData="mainContent"/>`,

})

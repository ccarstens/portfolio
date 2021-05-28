<template>
    <ul class="language-switcher text-right text-sm-left">
        <li v-for="locale in locales" :key="locale.code">
            <router-link
                :key="locale.code"
                :to="`/${locale.code}`"
            >
                {{ locale.name }}
            </router-link>
        </li>
    </ul>
</template>

<script>
    import state from '../state'
    import {locales} from '../locales'
    export default {
        name: "LanguageSwitcher",
        data(){
            return {
                state,
                locales
            }
        },
        created(){
            this.switchLanguage()
        },
        methods: {
            switchLanguageX(e){
                const target = e.target
                const language = target.getAttribute('data-language')
                if(language !== this.state.getActiveLanguage()){
                    this.state.setLanguageSwitcherInAction(true)
                    setTimeout(() => {
                        this.state.setActiveLanguage(language)
                        this.$nextTick(() => {
                            this.state.setLanguageSwitcherInAction(false)
                        })
                    }, 300)
                }
            },
            switchLanguage(){
                const newLocale = this.$route.params.locale
                if(newLocale !== this.state.getActiveLanguage()){
                    this.state.setLanguageSwitcherInAction(true)
                    setTimeout(() => {
                        this.state.setActiveLanguage(newLocale)
                        this.$nextTick(() => {
                            this.state.setLanguageSwitcherInAction(false)
                        })
                    }, 300)
                }
            }
        },
        computed: {
            current(){
                return this.$route.params.locale
            }
        },
        watch: {
            '$route' (to, from){
                this.switchLanguage()
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import '../../node_modules/bootstrap-scss/functions';
    @import '../../node_modules/bootstrap-scss/variables';
    @import '../../node_modules/bootstrap-scss/mixins';
    @import '../../node_modules/bootstrap-scss/grid';

    .language-switcher{
        font-weight: normal;
        font-size: 1.25rem;

        li{
            margin-bottom: -.4em;
        }

        a{
            margin-bottom: -1em;
            text-decoration: underline;
        }
    }

    @include media-breakpoint-down(md){
        .language-switcher{
            font-size: 1rem;

            li{
                margin-bottom: .1em;
            }


        }
    }
</style>
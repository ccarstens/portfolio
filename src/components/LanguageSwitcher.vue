<template>
    <ul class="language-switcher text-right text-sm-left">
        <li><a href="#" @click.prevent="switchLanguage" data-language="en">english</a></li>
        <li><a href="#" @click.prevent="switchLanguage" data-language="de">Deutsch</a></li>
        <li><a href="#" @click.prevent="switchLanguage" data-language="jp">日本語</a></li>
        <li><a href="#" @click.prevent="switchLanguage" data-language="ru">русский</a></li>
    </ul>
</template>

<script>
    import state from '../state'
    export default {
        name: "LanguageSwitcher",
        data(){
            return {
                state: state
            }
        },
        methods: {
            switchLanguage(e){
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
        }

        a:link{
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
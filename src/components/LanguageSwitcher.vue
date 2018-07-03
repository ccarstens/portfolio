<template>
    <ul class="language-switcher">
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
    .language-switcher{
        font-weight: normal;

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
</style>
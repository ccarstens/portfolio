<template>
    <ul class="language-switcher text-right text-sm-left">
        <li v-for="locale in locales" :key="locale.code">
            <router-link :key="locale.code" :to="`/${locale.code}`">
                {{ locale.name }}
            </router-link>
        </li>
        <span>{{ count }}</span>
    </ul>
</template>

<script>
import { locales } from '../locales'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'LanguageSwitcher',
    data() {
        return {
            locales,
        }
    },
    computed: {
        ...mapState(['locale', 'count']),
        current() {
            return this.$route.params.locale
        },
    },
    watch: {
        $route(to, from) {
            this.switchLanguage()
        },
    },
    created() {
        this.switchLanguage()
    },
    methods: {
        ...mapMutations(['SET_LOCALE_SWITCH_IN_ACTION']),
        ...mapActions(['setTest']),
        switchLanguage() {
            const newLocale = this.$route.params.locale
            if (newLocale !== this.locale) {
                this.SET_LOCALE_SWITCH_IN_ACTION(true)
                setTimeout(() => {
                    this.$store.commit('SET_LOCALE', newLocale)
                    this.$nextTick(() => {
                        this.SET_LOCALE_SWITCH_IN_ACTION(false)
                    })
                }, 300)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap-scss/functions';
@import '../../node_modules/bootstrap-scss/variables';
@import '../../node_modules/bootstrap-scss/mixins';
@import '../../node_modules/bootstrap-scss/grid';

.language-switcher {
    font-weight: normal;
    font-size: 1.25rem;

    li {
        margin-bottom: -0.4em;
    }

    a {
        margin-bottom: -1em;
        text-decoration: underline;
    }
}

@include media-breakpoint-down(md) {
    .language-switcher {
        font-size: 1rem;

        li {
            margin-bottom: 0.1em;
        }
    }
}
</style>

<template>
    <div class="site-header-container">
        <header id="site-header" class="fixed-top container-fluid">
            <nav class="row">
                <div class="wrapper col offset-md-1">
                    <ul class="nav-list d-flex">
                        <li class="masthead">
                            <h1>
                                <a href="#" @click.prevent="jumpToTop"
                                    >cornelius<span class="possessive"
                                        >'s</span
                                    ></a
                                >
                            </h1>
                        </li>
                        <li class="projects-link">
                            <a href="#projects">{{ e(labels.projects) }}</a>
                        </li>
                        <li
                            class="ml-auto ml-md-5 offset-lg-1 order-4 order-md-3"
                        >
                            <LanguageSwitcher></LanguageSwitcher>
                        </li>
                        <li
                            class="ml-auto order-3 order-md-4"
                            style="font-size: 1.5em"
                        >
                            <GlobalAudioControl></GlobalAudioControl>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
import { labels } from '../assets/content'
import e from '../localizedContent'

import LanguageSwitcher from './LanguageSwitcher'
import GlobalAudioControl from './GlobalAudioControl'

export default {
    name: 'HeaderElement',
    components: {
        LanguageSwitcher,
        GlobalAudioControl,
    },
    data() {
        return {
            labels: labels,
            offsetTop: 0,
        }
    },
    methods: {
        e,
        jumpToTop() {
            window.scrollTo(0, 0)
        },
    },
}
</script>

<style lang="scss">
h1 {
    font-size: 1.5rem;
}
.nav-list > li:not(:last-child) {
    padding-right: 0.5em;
}

#site-header {
    width: 100%;
    height: 30px;
    z-index: 2;
    pointer-events: none;
    font-size: 1.5rem;
    ul {
        list-style-type: none;
        padding-left: 0;
    }

    li {
        pointer-events: auto;

        a {
            display: inline-block;
        }
    }

    li.no-show {
        opacity: 0;
    }
}
.site-header-container {
    font-weight: 700;

    a {
        text-decoration: none;
    }
}

nav {
    padding-top: 20px;
}
</style>

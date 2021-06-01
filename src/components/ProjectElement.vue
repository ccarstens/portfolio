<template>
    <article :class="classObject">
        <div
            v-observe-visibility="{
                callback: viewportVisibilityChanged,
                throttle,
                intersection: {
                    threshold,
                },
            }"
            class="row"
        >
            <header
                class="
                    description
                    col-12
                    order-0
                    col-lg-4
                    order-lg-1
                    d-flex
                    flex-column
                "
            >
                <div>
                    <h2 :id="slug">
                        {{ e(projectContent.title) }}
                    </h2>
                    <span class="year">({{ projectContent.year }}</span
                    >)
                </div>

                <p v-html="e(projectContent.description)"></p>

                <p v-if="hasGlobalAudio">
                    <AudioSample
                        :src="projectContent.globalAudio.src"
                    ></AudioSample>
                </p>

                <p v-if="hasUrl">
                    <a :href="projectUrl" target="_blank">{{
                        projectUrlLabel
                    }}</a>
                </p>
            </header>
            <MediaSlider
                :content="content"
                :in-viewport="projectInViewport"
                :labelled-by="slug"
            ></MediaSlider>
        </div>
    </article>
</template>

<script>
import MediaSlider from './MediaSlider'
import AudioSample from './AudioSample'
import { labels } from '../assets/content'

import { mapState } from 'vuex'
export default {
    name: 'ProjectElement',
    components: {
        MediaSlider,
        AudioSample,
    },
    props: ['content'],
    data() {
        return {
            labels,
            projectContent: {},
            projectInViewport: false,
            throttle: 300,
            standardContentDimensions: {
                width: 0,
                height: 0,
            },
        }
    },
    computed: {
        ...mapState(['is_touch']),
        hashSlug() {
            return '#' + this.slug
        },
        slug() {
            return this.e(this.projectContent.title)
                .toLowerCase()
                .replaceAll(' ', '-')
        },
        classObject() {
            return {
                visible: this.projectInViewport,
                'project-element': true,
                'container-fluid': true,
                dark: this.hasDarkMode,
            }
        },

        threshold() {
            return window.innerWidth > 400 ? 0.4 : 0.4
        },
        playAudio() {
            return this.projectInViewport
        },
        hasGlobalAudio() {
            return this.projectContent.hasOwnProperty('globalAudio')
        },
        hasDarkMode() {
            if (this.projectContent.hasOwnProperty('darkMode')) {
                return this.projectContent.darkMode
            }
            return false
        },
        hasUrl() {
            if (this.projectContent.hasOwnProperty('url')) {
                return (
                    typeof this.projectContent.url == 'object' ||
                    this.projectContent.url.length > 0
                )
            }
            return false
        },
        projectUrl() {
            if (this.hasUrl) {
                if (this.urlIsString) {
                    return this.projectContent.url
                }
                return this.projectContent.url.uri
            }
            return ''
        },
        projectUrlLabel() {
            if (this.hasUrl) {
                if (this.urlIsString) {
                    return this.e(labels.visit)
                }
                return this.e(this.projectContent.url.label)
            }
            return ''
        },
        urlType() {
            return typeof this.projectContent.url
        },
        urlIsObject() {
            return this.urlType == 'object'
        },
        urlIsString() {
            return this.urlType == 'string'
        },
    },
    watch: {
        content(newContent) {
            this.projectContent = newContent
        },
    },
    created() {
        this.projectContent = this.content
    },

    methods: {
        viewportVisibilityChanged(projectInViewport) {
            this.projectInViewport = projectInViewport
        },
    },
}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap-scss/functions';
@import '../../node_modules/bootstrap-scss/variables';
@import '../../node_modules/bootstrap-scss/mixins';
@import '../../node_modules/bootstrap-scss/grid';

.project-element {
    min-height: 100vh;
    padding-top: 20vh;
    padding-bottom: 15vh;
    color: #007bff;

    h2 {
        font-size: inherit;
        display: inline-block;
    }
    .year {
        font-style: italic;
    }
    a {
        text-decoration: underline;
    }
}

.project-element.dark {
    background: black;
}

.description {
    margin-top: calc(1vw - 5px);
}
@include media-breakpoint-down(lg) {
    .description {
        margin-top: calc(0.8vw - 5px);
    }
}
</style>

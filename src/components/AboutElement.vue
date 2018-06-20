<template>
    <div id="about" :class="classObject">
        <div class="row">
            <div class="maintext col col-sm-10 col-md-7 col-lg-5" v-html="text"></div>
        </div>
        <NameScrollElement/>
    </div>
</template>

<script>

    import NameScrollElement from './NameScrollElement'
    import state from '../state'

    export default {
        name: "AboutElement",
        props: [
            'text',
        ],
        components: {
            NameScrollElement
        },
        data(){
            return {
                state: state
            }
        },
        computed: {
            classObject(){
                return {
                    about: true,
                    'no-show': this.state.state.scrollableIsAtHeaderPosition,
                    'container': true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    /*@import '../../node_modules/bootstrap-scss/grid';*/
    /*@import '../../node_modules/bootstrap-scss/mixins/breakpoints';*/

    .about{
        padding-top: 35vh;
        margin-bottom: 20em;
    }

    .no-show{
        opacity: 0;
    }

    /*@include media-breakpoint-between(xs, md){
        .about{
            font-size: 1.375rem;
        }
    }*/
</style>
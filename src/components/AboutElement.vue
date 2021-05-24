<template>
    <div id="about" :class="classObject">
            <div class="row">
                <div class="maintext col col-sm-10 col-md-12 col-lg-12 offset-md-1x" v-html="text"></div>
            </div>
            <!--<div class="row">-->
                <!--<div class="col col-sm-10 col-md-7 col-lg-5 offset-md-1">-->
                    <!--<NameScrollElement/>-->
                <!--</div>-->
            <!--</div>-->
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
                    'container-fluid': true
                }
            }
        }
    }
</script>

<style lang="scss" >
    @import '../../node_modules/bootstrap-scss/functions';
    @import '../../node_modules/bootstrap-scss/variables';
    @import '../../node_modules/bootstrap-scss/mixins';
    @import '../../node_modules/bootstrap-scss/grid';

    .about{
        /*padding-top: 35vh;*/
        margin-bottom: 20vh;
    }
    #app .about{
        font-size: 4em;
        line-height: 1.4em;

        p{
            margin-bottom: .6em;
        }

    }

    .no-show{
        opacity: 0;
    }

    @include media-breakpoint-down(md){
        #app .about{
            font-size: 1.5em;
        }
    }
</style>
<template>
    <div class="site-header-container">
        <header id="site-header" class="fixed-top container-fluid">
            <nav class="row">
                <div class="wrapper col  offset-md-1">
                    <ul class="nav-list d-flex">
                        <li :class="pageNameClasses"><a href="#">cornelius</a></li>
                        <li class=""><a href="#projects">{{e(labels.projects)}}</a></li>
                        <li class="ml-auto ml-lg-5 offset-lg-1">
                            <LanguageSwitcher></LanguageSwitcher>
                        </li>
                        <li class="ml-auto" style="font-size: 1.5em;">
                            <GlobalAudioControl></GlobalAudioControl>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>


    import state from '../state'
    import {labels} from '../assets/content'
    import e from '../localizedContent'

    import LanguageSwitcher from './LanguageSwitcher'
    import GlobalAudioControl from './GlobalAudioControl'


    export default {
        name: "HeaderElement",
        components: {
            LanguageSwitcher,
            GlobalAudioControl
        },
        data(){
            return {
                labels: labels,
                offsetTop: 0,
                state: state
            }
        },
        created(){
            window.addEventListener('resize', this.handleResize)
        },
        mounted(){
            this.handleResize()

        },
        methods: {
            e,
            handleResize(){
                setTimeout((event) => {
                    if(this.state.debug) console.log('window.resize triggered, HeaderElement is handling')
                    this.offsetTop = this.$el.getElementsByTagName('li')[0].getBoundingClientRect().top
                }, 100)
            }
        },
        computed: {
            pageNameClasses(){
                return {
                    // 'd-flex': true,
                    // 'justify-content-left': true,
                    'no-show': !this.state.state.scrollableIsAtHeaderPosition
                }
            }
        },
        watch: {
            offsetTop(newOffset){
                this.state.setHeaderOffset(newOffset)
            }
        }
    }
</script>

<style lang="scss">

    #site-header, .gradient{
        width: 100%;
        height: 30px;
    }

    .nav-list > li:not(:last-child){
        padding-right: .5em;
    }

    #site-header{
        z-index: 2;
        pointer-events: none;

        ul {
            list-style-type: none;
            padding-left: 0;

            /*-webkit-justify-content: space-between;*/
        }


        li{
            /*width: 30%;*/

            pointer-events: auto;

            a{
                display: inline-block;
                /*color: #000000;*/

            }
        }

        li.no-show{
            opacity: 0;
        }

    }
    .site-header-container{
        font-weight: 700;

        a{
            text-decoration: none;
        }
    }

    .gradient{
        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 66%, rgba(255,255,255,0) 100%);
        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 66%,rgba(255,255,255,0) 100%);
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 66%,rgba(255,255,255,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );
        z-index: 0;

    }

    nav{
        padding-top: 20px;
    }

    /*@media screen and (max-width: 500px){*/
        /*nav{*/
            /*padding-top: 40px;*/
        /*}*/
    /*}*/




</style>
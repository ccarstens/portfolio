<template>
    <li class="name-scroll">
        <p>cornelius</p>
        <div class="debug">
            <!--<p>{{ state.state.headerOffset }}</p>-->
            <!--<p>{{ offsetTop }}</p>-->
        </div>
    </li>
</template>

<script>

    import state from '../state'

    export default {
        name: "NameScrollElement",
        data(){
            return {
                state: state,
                offsetTop: 0
            }
        },
        created(){
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll(event){
                this.offsetTop = this.$el.getBoundingClientRect().top
                if(this.offsetTop <= this.state.state.headerOffset && !this.state.state.scrollableIsAtHeaderPosition){
                    this.state.setScrollableIsAtHeaderPosition(true)
                }

                if(this.offsetTop > this.state.state.headerOffset && this.state.state.scrollableIsAtHeaderPosition){
                    this.state.setScrollableIsAtHeaderPosition(false)
                }
            }
        }
    }
</script>

<style lang="scss">

    .name-scroll{
        margin-top: 3em;

        .debug{
            position: fixed;
            bottom: 10px;
            left: 0;
            z-index: 100;
        }
        p{
            margin: 0;
            padding: 0;
        }
    }

    li{
        list-style-type: none;
        font-weight: 700;
    }


</style>
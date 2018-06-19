<template>
    <div :class="classObject">
        <div class="maintext" v-html="text"></div>
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
                    'no-show': this.state.state.scrollableIsAtHeaderPosition
                }
            }
        }
    }
</script>

<style scoped>
    .about{
        margin-bottom: 20em;
    }

    .no-show{
        opacity: 0;
    }
</style>
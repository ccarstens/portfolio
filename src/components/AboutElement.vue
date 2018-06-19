<template>
    <div class="about">
        <div class="maintext" v-html="text"></div>
        <NameScrollElement></NameScrollElement>
    </div>
</template>

<script>

    import NameScrollElement from './NameScrollElement'

    export default {
        name: "AboutElement",
        props: [
            'text'
        ],
        components: {
            NameScrollElement
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    .about{
        margin-bottom: 20em;
    }
</style>
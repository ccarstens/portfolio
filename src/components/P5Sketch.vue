<template>
    <div class="p5-sketch">
        <button @click="show = true">start</button>
        <component v-if="show" v-bind:is="name" ></component>
    </div>
</template>

<script>
    import DotCloud from './DotCloud'
    export default {
        name: "P5Sketch",
        data(){
            return {
                show: false
            }
        },
        components: {
            DotCloud
        },
        props: [ 'name' ]
    }
</script>

<style scoped>

</style>
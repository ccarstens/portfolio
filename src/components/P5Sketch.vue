<template>
    <div class="p5-sketch">
        <button v-if="!show" @click="show = true">start</button>
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
        props: [ 'name' ],
        methods: {
            init(){
                this.show = true
            }
        }
    }
</script>

<style scoped>

</style>
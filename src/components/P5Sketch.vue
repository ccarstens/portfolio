<template>
    <div class="p5-sketch">
        <button v-if="show" @click="show = true">start</button>
        <component :is="name" :width="dimensions.width" :height="dimensions.height" :play="isVisible"></component>
    </div>
</template>

<script>
    import DotCloud from './DotCloud'

    export default {
        name: "P5Sketch",
        data(){
            return {
                show: false,
                // width: 0,
                // height: 0
            }
        },
        components: {
            DotCloud
        },
        props: {
            name: {
                type: String
            },
            dimensions: {
                type: Object
            },
            isVisible: {
                type: Boolean
            }
        },
        updated(){
            // this.updateElementValues()
        },
        mounted(){

        },
        methods: {
            init(){
                this.show = true
            },
            updateElementValues(){
                const values = this.containingSlideElement.getBoundingClientRect()
                this.width = values.width
                this.height = values.height
            }
        },
        computed: {
            containingSlideElement(){
                return this.$el
            }
        },
        watch: {
            dimensions(newDimensions){
                console.log("dimensions changed")
                // this.$el.style.height = this.dimensions.height
            }
        }
    }
</script>

<style scoped>

    .p5-sketch{
        height: 100%;
        /*background: #ffffff;*/

    }

</style>
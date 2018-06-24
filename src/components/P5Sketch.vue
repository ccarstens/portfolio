<template>
    <div class="p5-sketch">
        <button v-if="show" @click="show = true">start</button>
        <component v-if="true" :is="name" :width="dimensions.width" :height="dimensions.height"></component>
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
            }
        },
        updated(){
            // this.updateElementValues()
        },
        mounted(){
            console.log("mounted p5")
            // this.$el.style.height = this.dimensions.height
            // setTimeout(() => this.updateElementValues(), 1500)
            // window.addEventListener('resize', () => {
            //     this.updateElementValues()
            // })
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
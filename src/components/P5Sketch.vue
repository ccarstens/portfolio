<template>
    <div class="p5-sketch">
        <button v-if="show" @click="show = true">start</button>
        <component
            :is="name"
            :width="dimensions.width"
            :height="dimensions.height"
            :play="isVisible"
            @user-interaction="$emit('user-interaction')"
        ></component>
    </div>
</template>

<script>
import DotCloud from './DotCloud'

export default {
    name: 'P5Sketch',
    components: {
        DotCloud,
    },
    props: {
        name: {
            type: String,
        },
        dimensions: {
            type: Object,
        },
        isVisible: {
            type: Boolean,
        },
    },
    data() {
        return {
            show: false,
            // width: 0,
            // height: 0
        }
    },
    computed: {
        containingSlideElement() {
            return this.$el
        },
    },
    watch: {
        dimensions(newDimensions) {
            console.log('dimensions changed')
            // this.$el.style.height = this.dimensions.height
        },
    },
    updated() {
        // this.updateElementValues()
    },
    mounted() {},
    methods: {
        init() {
            this.show = true
        },
        updateElementValues() {
            const values = this.containingSlideElement.getBoundingClientRect()
            this.width = values.width
            this.height = values.height
        },
    },
}
</script>

<style scoped>
.p5-sketch {
    height: 100%;
    /*background: #ffffff;*/
}
</style>

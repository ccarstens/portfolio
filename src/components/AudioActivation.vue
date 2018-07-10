<template>
    <div class="d-flex justify-content-center audio-activation">
        <a
                @click="$emit('click')"
                @touchstart="$emit('click')"
                href="#">{{e(labels.click)}} 🔊</a>
    </div>
</template>

<script>
    import {labels} from '../assets/content'
    import e from '../localizedContent'
    export default {
        name: "AudioActivation",
        data(){
            return {
                labels: labels,
            }
        },
        methods: {
            e
        }
    }
</script>

<style scoped>
    .audio-activation{
        margin-top: 2em;
        margin-bottom: 2em;
        font-size: 4em;
    }
</style>
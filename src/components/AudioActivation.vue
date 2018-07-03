<template>
    <div class="d-flex justify-content-center audio-activation">
        <a
                @click="$emit('click')"
                @touchstart="$emit('click')"
                href="#">click 🔊</a>
    </div>
</template>

<script>
    export default {
        name: "AudioActivation"
    }
</script>

<style scoped>
    .audio-activation{
        margin-top: 2em;
        margin-bottom: 2em;
        font-size: 4em;
    }
</style>
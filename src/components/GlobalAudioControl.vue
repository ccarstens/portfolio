<template>
    <button @click="handleChange" :class="classObject">
        <span v-if="state.getGlobalVolume() === 1">🔊</span>
        <span v-else>🔈</span>
    </button>
</template>

<script>
    import state from '../state'

    export default {
        name: "GlobalAudioControl",
        data(){
            return {
                state
            }
        },
        methods: {
            handleChange(){
                if(this.state.getGlobalVolume() === 1){
                    this.state.setGlobalVolume(0)
                }else{
                    this.state.setGlobalVolume(1)
                }
            }
        },
        computed: {
            classObject(){
                return {
                    show: this.state.getCanAutoplayAudio() || this.state.getAtLeastOneMediaElementInitialized()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    button:focus{
        outline: none;
    }

    button{
        opacity: 0;
        pointer-events: none;

        background: none;
        border: none;
        pointer-events: auto;
        cursor: pointer;

        transition: opacity 300ms ease-in-out;
        position: relative;
        top: -.2em;

    }

    .show{
        opacity: 1;
        pointer-events: auto;
    }
</style>
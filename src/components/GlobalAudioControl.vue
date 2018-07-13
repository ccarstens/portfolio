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
                    hide: !this.state.getCanAutoplayAudio() || !this.state.getMediaElementsLoaded()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>


    .hide{
        opacity: 0;
        pointer-events: none;
    }

    button:focus{
        outline: none;
    }

    button{
        background: none;
        border: none;
        pointer-events: auto;
        cursor: pointer;

        transition: opacity 300ms ease-in-out;

    }
</style>
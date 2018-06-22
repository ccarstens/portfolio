<template>
    <div class="audio-element" style="display: none;">

        <button @click="start">Click me</button>

        <audio  controls>
            <source :src="test" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
  export default {
    name: "AudioElement",
      props: [
          'play'
      ],
      data(){
        return {
            audio: undefined,
            playing: false
        }
      },
      mounted(){
        this.audio = this.$el.getElementsByTagName('audio')[0]
      },
      methods: {
        start(){
            this.audio.play()
            this.audio.pause()
        }
      },
      computed: {
        test(){
            return require('../assets/nantes.mp3')
        }
      },
      watch: {
        play(newPlayState){
            if(newPlayState) this.audio.play()
            else this.audio.pause()
            this.playing = newPlayState
        }
      }
  }
</script>

<style scoped>

</style>
<template>
    <div class="audio-element" style="display: none;">

        <button @click="init">Click me</button>

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
            playing: false,
            volume: 0
        }
      },
      mounted(){
        this.audio = this.$el.getElementsByTagName('audio')[0]
        this.audio.volume = 0
      },
      methods: {
        init(){
            this.audio.play()
            this.audio.pause()
        },
        playAudio(){
            this.audio.play()
            this.increaseVolumeStepwise()
        },
        pauseAudio(){
            this.decreaseVolumeStepwise()
        },
        setVolume(newValue){
            if(newValue > 1)  this.volume = 1
            else if(newValue < 0)  this.volume = 0
            else this.volume = newValue

            this.audio.volume = this.volume
        },
        increaseVolumeStepwise(){
            setTimeout(() => {
                if(this.volume !== 1){
                    this.setVolume(this.volume + 0.05)
                    this.increaseVolumeStepwise()
                }
            }, 50)
        },
        decreaseVolumeStepwise(){
            setTimeout(() => {
                if(this.volume > 0){
                    this.setVolume(this.volume - 0.05)
                    this.decreaseVolumeStepwise()
                }else{
                    this.audio.pause()
                }

            }, 50)
        }

      },
      computed: {
        test(){
            return require('../assets/nantes.mp3')
        }
      },
      watch: {
        play(newPlayState){
            if(newPlayState) this.playAudio()
            else{
                this.pauseAudio()
            }
            this.playing = newPlayState
        }
      }
  }
</script>

<style scoped>

</style>
<template>
    <div class="audio-element" style="display: none;">

        <button @click="init">{{ prettyVolume }}</button>

        <audio  controls>
            <source :src="test" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
  export default {
    name: "AudioElement",
      props: [
          'play',
          'src'
      ],
      data(){
        return {
            audio: undefined,
            playing: false,
            volume: 0,
            fadeIn: {
                inProgress: false,
                timeout: undefined
            },
            fadeOut: {
                inProgress: false,
                timeout: undefined
            }
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

            if(this.fadeOut.inProgress){
                this.stopFadeOut()
            }
            this.fadeIn.inProgress = true
            this.fadeIn.timeout =  setTimeout(() => {
                if(this.volume < 1){
                    this.setVolume(this.volume + 0.05)
                    this.increaseVolumeStepwise()
                }else{
                    this.fadeIn.inProgress = false
                }
            }, 50)
        },
        decreaseVolumeStepwise(){

            if(this.fadeIn.inProgress) this.stopFadeIn()

            this.fadeOut.inProgress = true;
            this.fadeOut.timeout = setTimeout(() => {
                if(this.volume > 0){
                    this.setVolume(this.volume - 0.05)
                    this.decreaseVolumeStepwise()
                }else{
                    this.audio.pause()
                    this.fadeOut.inProgress = false;
                }

            }, 50)
        },
        stopFadeOut(){
            clearTimeout(this.fadeOut.timeout)
            this.fadeOut.inProgress = false
        },
        stopFadeIn(){
            clearTimeout(this.fadeIn.timeout)
            this.fadeIn.inProgress = false
        }

      },
      computed: {
        test(){
            return require('../' + this.src)
        },
          prettyVolume(){
            return Math.trunc(this.volume * 100)
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
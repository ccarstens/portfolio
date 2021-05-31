export default {
    debug: false,
    state: {
        isTouch: false,
        canAutoplayAudio: false,
        globalVolume: 1,
        atLeastOneMediaElementInitialized: false,
        audioActivationFinished: false,
    },
    setIsTouch(newValue) {
        if (this.debug) console.log('Set isTouch to', newValue)
        this.state.isTouch = newValue
    },
    getIsTouch() {
        if (this.debug)
            console.log('Get isTouch with value', this.state.isTouch)
        return this.state.isTouch
    },
    setCanAutoplayAudio(newValue) {
        if (this.debug) console.log('Set canAutoplayAudio to', newValue)
        this.state.canAutoplayAudio = newValue
    },
    getCanAutoplayAudio() {
        if (this.debug)
            console.log(
                'Get canAutoplayAudio with value',
                this.state.canAutoplayAudio
            )
        return this.state.canAutoplayAudio
    },
    setGlobalVolume(newValue) {
        if (this.debug) console.log('Set globalVolume to', newValue)
        this.state.globalVolume = newValue
    },
    getGlobalVolume() {
        if (this.debug)
            console.log('Get globalVolume with value', this.state.globalVolume)
        return this.state.globalVolume
    },
    setAtLeastOneMediaElementInitialized(newValue) {
        if (this.debug)
            console.log('Set atLeastOneMediaElementInitialized to', newValue)
        this.state.atLeastOneMediaElementInitialized = newValue
    },
    getAtLeastOneMediaElementInitialized() {
        if (this.debug)
            console.log(
                'Get atLeastOneMediaElementInitialized with value',
                this.state.atLeastOneMediaElementInitialized
            )
        return this.state.atLeastOneMediaElementInitialized
    },

    setAudioActivationFinished(newValue) {
        if (this.debug) console.log('Set audioActivationFinished to', newValue)
        this.state.audioActivationFinished = newValue
    },
    getAudioActivationFinished() {
        if (this.debug)
            console.log(
                'Get audioActivationFinished with value',
                this.state.audioActivationFinished
            )
        return this.state.audioActivationFinished
    },
}
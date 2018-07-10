export default {
    debug: true,
    state: {
        headerOffset: 0,
        scrollableIsAtHeaderPosition: false,
        activeLanguage: 'en',
        languageSwitcherInAction: false,
        isTouch: false,
        audioInitialized: false,
    },
    setHeaderOffset(newValue){
        if(this.debug) console.log('Setting headerOffset to ', newValue)
        this.state.headerOffset = newValue
    },
    setScrollableIsAtHeaderPosition(newValue){
        if(this.debug) console.log('setScrollableIsAtHeaderPosition triggered with', newValue)
        this.state.scrollableIsAtHeaderPosition = newValue
    },
    setActiveLanguage(newValue) {
        if (this.debug) console.log('Set activeLanguage to', newValue)
        this.state.activeLanguage = newValue
    },
    getActiveLanguage() {
        if (this.debug) console.log('Get activeLanguage with value', this.state.activeLanguage)
        return this.state.activeLanguage
    },
    setLanguageSwitcherInAction(newValue) {
        if (this.debug) console.log('Set languageSwitcherInAction to', newValue)
        this.state.languageSwitcherInAction = newValue
    },
    getLanguageSwitcherInAction() {
        if (this.debug) console.log('Get languageSwitcherInAction with value', this.state.languageSwitcherInAction)
        return this.state.languageSwitcherInAction
    },
    setIsTouch(newValue) {
        if (this.debug) console.log('Set isTouch to', newValue)
        this.state.isTouch = newValue
    },
    getIsTouch() {
        if (this.debug) console.log('Get isTouch with value', this.state.isTouch)
        return this.state.isTouch
    },
    setAudioInitialized(newValue) {
        if (this.debug) console.log('Set audioInitialized to', newValue)
        this.state.audioInitialized = newValue
    },
    getAudioInitialized() {
        if (this.debug) console.log('Get audioInitialized with value', this.state.audioInitialized)
        return this.state.audioInitialized
    },
    



}
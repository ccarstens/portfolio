export default {
    debug: true,
    state: {
        headerOffset: 0,
        scrollableIsAtHeaderPosition: false,
        activeLanguage: 'en',
        languageSwitcherInAction: false,
        isTouch: false,
        canAutoplayAudio: false,
        globalVolume: 1,
        atLeastOneMediaElementInitialized: false,
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
    setCanAutoplayAudio(newValue) {
        if (this.debug) console.log('Set canAutoplayAudio to', newValue)
        this.state.canAutoplayAudio = newValue
    },
    getCanAutoplayAudio() {
        if (this.debug) console.log('Get canAutoplayAudio with value', this.state.canAutoplayAudio)
        return this.state.canAutoplayAudio
    },
    setGlobalVolume(newValue) {
        if (this.debug) console.log('Set globalVolume to', newValue)
        this.state.globalVolume = newValue
    },
    getGlobalVolume() {
        if (this.debug) console.log('Get globalVolume with value', this.state.globalVolume)
        return this.state.globalVolume
    },
    setAtLeastOneMediaElementInitialized(newValue) {
        if (this.debug) console.log('Set atLeastOneMediaElementInitialized to', newValue)
        this.state.atLeastOneMediaElementInitialized = newValue
    },
    getAtLeastOneMediaElementInitialized() {
        if (this.debug) console.log('Get atLeastOneMediaElementInitialized with value', this.state.atLeastOneMediaElementInitialized)
        return this.state.atLeastOneMediaElementInitialized
    },



}
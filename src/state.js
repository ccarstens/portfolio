export default {
    debug: true,
    state: {
        headerOffset: 0,
        scrollableIsAtHeaderPosition: false,
        activeLanguage: 'de',
        languageSwitcherInAction: false
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



}
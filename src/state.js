export default {
    debug: true,
    state: {
        headerOffset: 0,
        scrollableIsAtHeaderPosition: false
    },
    setHeaderOffset(newValue){
        if(this.debug) console.log('Setting headerOffset to ', newValue)
        this.state.headerOffset = newValue
    },
    setScrollableIsAtHeaderPosition(newValue){
        if(this.debug) console.log('setScrollableIsAtHeaderPosition triggered with', newValue)
        this.state.scrollableIsAtHeaderPosition = newValue
    }
}
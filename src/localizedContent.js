import state from './state'
export default (value) => {
    if (typeof value === 'string') return value

    const lang = state.getActiveLanguage()

    if (value.hasOwnProperty(lang)) return value[lang]
    else if (value.hasOwnProperty('en')) return value['en']
}
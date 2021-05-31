import { store } from './store'
export const e = (value) => {
    if (typeof value === 'string') return value

    const lang = store.state.locale

    if (value.hasOwnProperty(lang)) return value[lang]
    else if (value.hasOwnProperty('en')) return value['en']
}
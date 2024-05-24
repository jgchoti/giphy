import { URL_SEARCH, API_KEY, DEFAULT_GIPHY } from '../data/constants.js'
import { changeBg } from './change-bg.js'
export const getGiphy = async (input) => {
    const img = document.querySelector('img')
    if (input === undefined) {
        img.src = DEFAULT_GIPHY
        changeBg();
        return
    }
    try {
        const response = await fetch(`${URL_SEARCH}api_key=${API_KEY}&s=${input}`, { mode: 'cors' });
        const data = await response.json()
        img.src = data.data.images.original.url
        changeBg();
    } catch (error) {
        img.src = DEFAULT_GIPHY
    }

}
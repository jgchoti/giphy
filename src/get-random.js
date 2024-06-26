import { API_KEY } from '../config.js'
import { URL_RANDOM, DEFAULT_GIPHY } from '../data/constants.js'
import { changeBg } from "./change-bg.js";


export const getRandom = async () => {
    const img = document.querySelector('img')
    try {
        const response = await fetch(`${URL_RANDOM}api_key=${API_KEY}`, { mode: 'cors' });
        const data = await response.json()
        img.src = data.data.images.original.url
        changeBg();
    } catch (error) {
        img.src = DEFAULT_GIPHY
    }
}
import { getGiphy } from './get-giphy.js';

export const searchHandler = () => {
    const inputEl = document.getElementById('input');
    const keyword = inputEl.value.trim();
    console.log(keyword);
    getGiphy(keyword);

};

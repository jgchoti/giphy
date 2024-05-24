import { searchHandler } from './search-handler.js';
import { randomHandler } from './random-handler.js';

export const btnListeners = () => {
    const btnSearchEl = document.getElementById('btn-search');
    const btnRandomEl = document.getElementById('btn-random');
    const formEl = document.querySelector('form');

    btnSearchEl.addEventListener('click', (event) => {
        event.preventDefault();
        searchHandler(event);
    });

    btnRandomEl.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('random');
        randomHandler(event);
    });

    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('enter');
        searchHandler(event);
    });
};

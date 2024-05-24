export const changeBg = () => {
    const input = document.querySelector('input')
    const bgColor = input.value === undefined || input.value === '' ? '#FF709D' : 'black'
    document.body.style.backgroundColor = bgColor
}
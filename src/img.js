export const img =() => {
    const root = document.getElementById("root")
    const imgEl = document.createElement("img")
    root.appendChild(imgEl)
    return imgEl
}
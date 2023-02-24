import { getRandomColor } from './utils'


export default function initApp() {
    let butEl = document.createElement('button')
    butEl.className = 'button'
    butEl.textContent = 'Изменить цвет страницы'
    document.body.append(butEl)
    let but = document.querySelector('button')
    but.addEventListener("click", () => {
        document.body.style.background = getRandomColor()
    })
}

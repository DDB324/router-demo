let route = () => {
    const visibleWrapper = document.querySelector('#app')
    const number = window.location.hash.slice(1) || 1
    let div = document.querySelector(`#div${number}`)
    if (visibleWrapper.children.length > 0) {
        const removeDiv = visibleWrapper.children[0]
        removeDiv.style.display = 'none'
        document.body.appendChild(removeDiv)
    }
    if (!div) {
        div = document.querySelector('#div404')
    }
    div.style.display = 'block'
    visibleWrapper.appendChild(div)
}

route()

window.addEventListener('hashchange', () => {
    route()
})
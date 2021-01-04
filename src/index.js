let route = () => {
    const visibleWrapper = document.querySelector('#app')
    const number = window.location.hash.slice(1) || 1
    const div = document.querySelector(`#div${number}`)
    if (visibleWrapper.children.length > 0) {
        const removeDiv = visibleWrapper.children[0]
        removeDiv.style.display = 'none'
        document.body.appendChild(removeDiv)
    }
    div.style.display = 'block'
    visibleWrapper.appendChild(div)
}

route()

window.addEventListener('hashchange', () => {
    route()
})
function route(container1, container2) {
    const visibleWrapper = document.querySelector('#app')
    let array
    let {hash, pathname} = window.location
    if (hash) {
        array = hash.slice(1).split('/')
    } else if (pathname) {
        array = pathname.slice(1).split('/')
    }
    const number1 = array[0] || '1'
    const number2 = array[1]
    let div1 = container1[number1]

    if (div1) {
        //删除div1子节点只剩第一个子节点
        while (div1.children.length !== 0 && div1.children.length >= 1) {
            div1.removeChild(div1.lastChild)
        }
        //如果有子网页,将子网页增加到div1中
        if (number2) {
            if (container2[number2]) {
                div1.appendChild(container2[number2])
            } else {
                div1.appendChild(div404)
            }
        }
    } else {
        div1 = div404
    }

    //清空页面显示容器中的内容
    visibleWrapper.innerHTML = ''

    //渲染div1
    visibleWrapper.appendChild(div1)
}


const div1 = document.createElement('div')
div1.innerText = '1'
const div2 = document.createElement('div')
div2.innerText = '2'
const div3 = document.createElement('div')
div3.innerText = '3'
const div4 = document.createElement('div')
div4.innerText = '4'
const div404 = document.createElement('div')
div404.innerText = '你访问的页面不存在'

const div11 = document.createElement('div')
div11.innerText = '11'
const div12 = document.createElement('div')
div12.innerText = '12'
const div13 = document.createElement('div')
div13.innerText = '13'
const div14 = document.createElement('div')
div14.innerText = '14'

const routerTable = {
    '1': div1,
    '2': div2,
    '3': div3,
    '4': div4,
}

const routerTable2 = {
    '1': div11,
    '2': div12,
    '3': div13,
    '4': div14,
}

route(routerTable, routerTable2)

window.addEventListener('hashchange', () => {
    route(routerTable, routerTable2)
})
//获取用户想去的路径
const number = window.location.hash.slice(1) || 1


//获取页面
const div = document.querySelector(`#div${number}`)


const visible = document.querySelector('#app')

//渲染界面
div.style.display = 'block'

//展示界面
visible.appendChild(div)
const hambuguer = document.querySelector('.hamburguer')
const links = document.querySelector('.links')

hambuguer.onclick = () => {
    console.log(links.dataset)
    links.dataset.show = links.dataset.show === '1' ? '0' : '1'
}
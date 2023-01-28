const linkAbout = document.querySelector('.link-about-us')
const linkProdutos = document.querySelector('.link-produtos')
const linkOurTeam = document.querySelector('.link-nosso-time')
const linkRcpm = document.querySelector('.link-rcpm')
const linkContatos = document.querySelector('.link-contatos')
const linkSimulacao = document.querySelector('.link-simulacao')

const allLinks = document.querySelectorAll('.nav-link ')

const clearColor = () => allLinks.forEach(link => link.style.color = 'white')

const changeColor = (link) => {
    link.onclick = () => {
        clearColor()
        setTimeout(() => link.style.color = 'orange', 5)
    }
}

changeColor(linkAbout)
changeColor(linkProdutos)
changeColor(linkOurTeam)
changeColor(linkRcpm)
changeColor(linkContatos)
changeColor(linkSimulacao)


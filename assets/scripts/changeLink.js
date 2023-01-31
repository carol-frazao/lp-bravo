const linkInicio = document.querySelectorAll('.link-inicio')
const linkAbout = document.querySelectorAll('.link-about-us')
const linkProdutos = document.querySelectorAll('.link-produtos')
const linkOurTeam = document.querySelectorAll('.link-nosso-time')
const linkKnowRcpm = document.querySelectorAll('.link-know-rcpm')
const linkCoberturas = document.querySelectorAll('.link-coberturas')
const linkRcpm = document.querySelectorAll('.link-rcpm')
const linkContatos = document.querySelectorAll('.link-contatos')
const linkSimulacao = document.querySelectorAll('.link-simulacao')
const allLinks = document.querySelectorAll('.nav-link')
const navIndex = document.getElementById('myNav')

const clearColor = () => allLinks.forEach(link => link.style.color = 'white')

const changeLink = (links) => {
    links.forEach((link) => {
        link.onclick = () => {
            clearColor();
            setTimeout(() => link.style.color = 'orange', 5);
            navIndex.style.height = "0%";
        }
    })
}

changeLink(linkInicio)
changeLink(linkAbout)
changeLink(linkProdutos)
changeLink(linkOurTeam)
changeLink(linkKnowRcpm)
changeLink(linkCoberturas)
changeLink(linkRcpm)
changeLink(linkContatos)
changeLink(linkSimulacao)



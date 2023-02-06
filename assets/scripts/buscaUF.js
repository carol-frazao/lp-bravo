const uf = document.getElementById('estados')
const cidade = document.getElementById('municipios')

const getSequence = (list) => list.sort((a, b) => a.sequence - b.sequence)

if (!uf.value) {
    cidade.disabled = true;
}

window.addEventListener('load', async () => {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const response = await request.json();
    const options = document.createElement("optgroup")

    const estadosOrdenados = response.sort(function(a, b) {
        return a.sigla < b.sigla ? -1 : a.sigla > b.sigla ? 1 : 0;
    });

    estadosOrdenados.forEach((uf) => {
        options.innerHTML += '<option>' + uf.sigla + '</option>'
        options.setAttribute('label', 'UF')
    })
    uf.append(options)
});

uf.addEventListener("change", async () => {
    const cidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ uf.value +'/municipios';
    const request = await fetch(cidades);
    const response = await request.json();
    let options;

    response.forEach((cities) => {
        options += '<option>' + cities.nome + '</option>'
    })
    cidade.innerHTML = options;
    cidade.disabled = false;
})

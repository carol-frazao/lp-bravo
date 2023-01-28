const uf = document.getElementById('estados')
const cidade = document.getElementById('municipios')

window.addEventListener('load', async () => {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const response = await request.json();
    const options = document.createElement("optgroup")

    // options.setAttribute('label', 'UFs')
    response.forEach((uf) => {
        options.innerHTML += '<option>' + uf.sigla + '</option>'
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
    cidade.innerHTML = options
})


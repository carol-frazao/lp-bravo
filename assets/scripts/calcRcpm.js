const container = document.getElementById('resultContainer')
const resultado = document.getElementById('resultado')
const valorImovel = document.getElementById('property-value')

const toCurrency = (valor) => valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
// const returnNumbers = (value) => value?.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9])/g, '')

const renderResult = () => {
    const taxa = 0.013
    const valorInserido = valorImovel.value
    let value;

    let initialValue = valorInserido.replace(/\./g, "")

    if (initialValue.indexOf(',')) {
        value = parseFloat(initialValue.replace(",","."))
    }

    const is = value * 0.2
    let custo = is * taxa
    custo < 400 ? (custo = 400) : ''
    const iof = custo * 0.0738
    const total = (custo + iof)
    const totalFixed = total.toFixed(2)

    if (value) {
        container.style.display = 'flex';
        resultado.innerHTML = '<span> Valor do seguro: ' + '<strong>' + toCurrency(total) + '</strong> </span>'
    }
}
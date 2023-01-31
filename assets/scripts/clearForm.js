const showBtnName = () => {
    $('#name').val() ? $('#closeName').css('display', 'block') : $('#closeName').css('display', 'none');
}
const showBtnValue = () => {
    $('#property-value').val() ? $('#closeValue').css('display', 'block') : $('#closeValue').css('display', 'none');
}
const showBtnState= () => {
    $('#estados').val() ? $('#closeState').css('display', 'block') : $('#closeState').css('display', 'none');
}

const clearName = () => {
    $('#name').val('');
}
const clearValue = () => {
    $('#property-value').val('');
}
const clearState = () => {
    $('#estados').val('');
    $('#municipios').val('');
}
const clearForm = () => {
    $('.inputRcpm').val('')
    $('#closeName').css('display', 'none')
    $('#closeValue').css('display', 'none')
    $('#closeState').css('display', 'none')
    $('#resultContainer').css('display', 'none')
    $('#resultado').text('');
}



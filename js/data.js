/*setInterval(() => {
    
    var dataCurrent = new Date();

    meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    dias = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    document.querySelector('.data').innerHTML = dias[dataCurrent.getDay()] + ', ' +
        (fix(dataCurrent.getDate()) + ' de ' + meses[dataCurrent.getMonth()] + ' de ' + dataCurrent.getFullYear());
}, 1000);*/

setInterval(() => {

    let dataCurrent = new Date();

    function fix(digito) {
        if (digito < 10) {
            digito = "0" + digito
        }
        return digito;
    }

    meses = new Array('Janeiro', 'Fevereiro',
        'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    semana = new Array('Domingo', 'Segunda-feira', 'Terça-feira',
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    document.querySelector('#datas').innerHTML = semana[dataCurrent.getDay()] + ', ' +
        (fix(dataCurrent.getDate()) + ' de ' + meses[dataCurrent.getMonth()] + ' de ' + dataCurrent.getFullYear());
}, 1000);

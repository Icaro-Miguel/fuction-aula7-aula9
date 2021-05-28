 let anoatual = '2021'

    let nome = prompt('Digite seu nome:')
    
    let i = idade(2021, prompt('Qual seu ano de nascimento?'));

    function idade(anoatual, i) {
     return anoatual - i;
}

  alert(`oii! seu nome é ${nome} e você tem ${i} anos`)
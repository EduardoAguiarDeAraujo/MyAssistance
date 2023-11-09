//A API do via cep permite pegar os dados de um endereço q eu passar atraves do cep na url

function consultarCep(){
    const cep = '06186010';
    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => response.json())
        .then(data => console.log(response))
    
}


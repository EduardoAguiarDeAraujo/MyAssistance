function pesquisar() {
    const inputDoCep = document.querySelector("#cep");
    const valorDoCep = inputDoCep.value;
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            atribuirCampos(data);
        })
}

function atribuirCampos(data) {
    document.getElementById("cep").value = data.cep;
    document.getElementById("rua").value = data.logradouro;
    document.getElementById("complemento").value = data.complemento;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
    document.getElementById("estado").value = data.uf;
}

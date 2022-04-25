$('#formModal').submit(function(e){
    e.preventDefault();
    data = new FormData(document.getElementById('formModal'))
    
    fetch("./js/formSubmit.js", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((r) => r.json())
    .then((data) => {
        console.log("sucesso ", data)
    })
    .catch((error) => {
        console.log(error)
    })


    formAns = new Object()
    formAns.nome = data.get('nome')
    formAns.email = data.get('email')
    formAns.nomeEmpresa = data.get('nomeEmpresa')
    formAns.ramo = data.get('ramo')
    formAns.CNPJ = data.get('CNPJ')
    formAns.telefone = data.get('telefone')
    formAns.nomeEmpresa = data.get('nomeEmpresa')
    formAns.faturamento = data.get('faturamento')
    formAns.mensagem = data.get('mensagem')
    formAns.nomeEmpresa = data.get('nomeEmpresa')
    formAns.tos = data.get('ToS')
    console.log(formAns)

})
function validarEmail(email){
    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regx.test(email)) return true
    return false
}

function validarCNPJ(cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

function resetValidity(){
    setTimeout(function(){
        $('#ToS').get(0).setCustomValidity("")
        $('#email').get(0).setCustomValidity("")
        $('#CNPJ').get(0).setCustomValidity("")
        $('#ToS2').get(0).setCustomValidity("")
        $('#email2').get(0).setCustomValidity("")
        $('#CNPJ2').get(0).setCustomValidity("")
    }, 1000)
}

$('#formModal').submit(function(e){
    e.preventDefault();
    data = new FormData(document.getElementById('formModal'))
    if(data.get('ToS') != 'on') {
        $('#ToS').focus()
        $('#ToS').get(0).setCustomValidity("Para prosseguir é necessário que esteja de acordo!")
        $('#formModal').get(0).reportValidity()
        resetValidity()
        return false
    }
    
    if(!validarEmail(data.get('email'))) {
        $('#email').focus()
        $('#email').get(0).setCustomValidity("Email Inválido!")
        $('#formModal').get(0).reportValidity()
        resetValidity()
        return false
    }

    if(!validarCNPJ(data.get('CNPJ'))) {
        $('#CNPJ').focus()
        $('#CNPJ').get(0).setCustomValidity("CNPJ Inválido!")
        $('#formModal').get(0).reportValidity()
        resetValidity()

        return false
    }

    $.post("./php/sendMail.php", $('#formModal').serialize())
        .done(function(){
            alert("Dados enviados com sucesso!")
            $('#submitText').empty()
            $('#submitText').append("<p class='text-center mb-1 mt-1 font-weight-bold'>Entraremos em contato dentro de 1 dia útil! </p>")
            $('#submitText2').empty()
            $('#submitText2').append("<p class='text-center mb-1 mt-1 font-weight-bold'>Entraremos em contato dentro de 1 dia útil! </p>")
            return false
        })
        .fail(function(){
            alert("Ocorreu um erro")
            return false
        })
        
    
})



$('#formContact').submit(function(e){
    e.preventDefault();
    data = new FormData(document.getElementById('formContact'))
    if(data.get('ToS') != 'on') {
        $('#ToS2').focus()
        $('#ToS2').get(0).setCustomValidity("Para prosseguir é necessário que esteja de acordo!")
        $('#formContact').get(0).reportValidity()
        resetValidity()
        return false
    }
    
    if(!validarEmail(data.get('email'))) {
        $('#email2').focus()
        $('#email2').get(0).setCustomValidity("Email Inválido!")
        $('#formContact').get(0).reportValidity()
        resetValidity()
        return false
    }

    if(!validarCNPJ(data.get('CNPJ'))) {
        $('#CNPJ2').focus()
        $('#CNPJ2').get(0).setCustomValidity("CNPJ Inválido!")
        $('#formContact').get(0).reportValidity()
        resetValidity()
        return false
    }

    $.post("./php/sendMail.php", $('#formContact').serialize())
        .done(function(){
            alert("Dados enviados com sucesso!")
            $('#submitText').empty()
            $('#submitText').append("<p class='text-center mb-1 mt-1 font-weight-bold'>Entraremos em contato dentro de 1 dia útil! </p>")
            $('#submitText2').empty()
            $('#submitText2').append("<p class='text-center mb-1 mt-1 font-weight-bold'>Entraremos em contato dentro de 1 dia útil! </p>")
            return false
        })
        .fail(function(){
            alert("Ocorreu um erro")
            return false
        })
    
    
    
})


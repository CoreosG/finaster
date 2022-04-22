$('#formModal').submit(function(e){
    e.preventDefault();
    console.log(e)
    console.log(new FormData(document.getElementById('formModal')))
})
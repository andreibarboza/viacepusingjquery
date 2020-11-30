$("#buttonValue").click(function(){
    const cep = $("#inputValue").val();
    const response = axios.get(`https://viacep.com.br/ws/${cep}/json`)
    .then(function(response){
     $(".bairro").text(response.data.bairro)
     $(".logradouro").text(response.data.logradouro)
     $(".localidade").text(response.data.localidade)
     $(".uf").text(response.data.uf)
    })
    .catch(function(error){
        alert('Coloque um CEP valido');
    });
})

$("#inputValue").click(function(){
    $("span").empty();
    $("input").val("");
})

$('.header div').hide().fadeIn(2500);
$('.header i').hide().fadeIn(2000);
$('.inputBut').hide().fadeIn(2000);
$('.cepInfo').hide().fadeIn(2000);

// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
// }
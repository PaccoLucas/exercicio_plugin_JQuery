$(document).ready(function() {

    $('#carousel-imagens').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    
    $('.menu-hamburguer').click(function() {
        $('form').slideToggle();
    })
    
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00)00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true 
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu E-mail',
            telefone: 'Por favor, insira o seu telefone com ddd',
            cpf: 'Por favor, insira seu CPF',
            endereço: 'Por favor, insira seu endereço',
            cep: 'Por favor ,insira seu CEP',
        },
    })
})
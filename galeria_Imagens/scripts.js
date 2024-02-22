$(document).ready(function () {
    const baseImagens = {
      todas: ['todas.jpg', 'cidade.jpg', 'animais.jpg', 'natureza.jpg'],
      natureza: ['todas1.jpg', 'cidade1.jpg', 'animais1.jpg','natureza1.jpg'],
      cidade: ['todas2.jpg', 'cidade2.jpg', 'animais2.jpg','natureza2.jpg'],
      animais: ['todas3.jpg', 'cidade3.jpg', 'animais3.jpg','natureza3.jpg'],
    };
  
    function carregaImagens(categoria) {
      const imagens = baseImagens[categoria];
      const boxImagens = $('body').find('.box-imagens');
      console.log(categoria);

      imagens.forEach((img) => {
        boxImagens.append('<div><img src="imagens/' + img + '"/></div>');
      });
    }
  
    $('.botao-categoria').on('click', function () {
      $('body').find('.botao-categoria').removeClass('active');
      $(this).addClass('active');
      const categoria = $(this).data('categoria');
      carregaImagens(categoria);
    });
  });
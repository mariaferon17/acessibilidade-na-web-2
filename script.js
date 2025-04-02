document.addEventListener('DOMContentLoaded' function(){
    const aumentafontebotao document.getElementById('aumentar-font');
    const diminuiFonteBotao document.getElementById ('diminui-fonte');

    let tamanhoaAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoaAtualFonte += 0.1;
        document.body.style.fontsize = `${tamanhoAtualFonte}rem`
   
    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoaAtualFonte -= 0.1;
        document.body.style.fontsize = `${tamanhoAtualFonte}rem`
        
    });
});
        
 
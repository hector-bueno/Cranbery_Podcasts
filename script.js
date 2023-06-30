function inicio() {
    var iconeTitulo = document.getElementById('icone-titulo');
    console.log(iconeTitulo);
    iconeTitulo.setAttribute('src', 'https://cdn.lordicon.com/fpipqhrr.json');
    iconeTitulo.setAttribute('trigger', 'loop');
    iconeTitulo.setAttribute('colors', 'primary:#000000,secondary:#000000');
    iconeTitulo.setAttribute('stroke', '70');
    iconeTitulo.setAttribute('style', 'width:1.5em;height:1.5em');

    // pegar todos os itens com o ID/CLASS icone-fone
    var iconeCarrossel = document.getElementsByClassName('icone-fone');

    for (let i = 0; i < iconeCarrossel.length; i++) {
        console.log(i);
        console.log(iconeCarrossel[i]);
        iconeCarrossel[i].setAttribute('src', 'https://cdn.lordicon.com/xddtsyvc.json');
        iconeCarrossel[i].setAttribute('trigger', 'loop-on-hover');
        iconeCarrossel[i].setAttribute('colors','primary:#000000');
        iconeCarrossel[i].setAttribute('style', 'width:50px;height:50px');
        iconeCarrossel[i].setAttribute('delay', '500');
    }

}

function trocaDarkMode () {
    var botaoDarkMode = document.getElementById('dark-mode');
    botaoDarkMode.classList.toggle('dark-mode-on');

    var textoDarkMode = document.getElementById('texto-dark-mode');

    if (botaoDarkMode.classList.contains('dark-mode-on')) {
        textoDarkMode.innerHTML = ' Light Mode';
    } else {
        textoDarkMode.innerHTML = 'Dark Mode ';
    }
    // inserir aqui as alterações entre os modos light e dark
}
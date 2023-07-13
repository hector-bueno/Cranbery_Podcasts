function inicio() {
    var iconeTitulo = document.getElementById('icone-titulo');
    iconeTitulo.setAttribute('src', 'https://cdn.lordicon.com/fpipqhrr.json');
    iconeTitulo.setAttribute('trigger', 'loop');
    iconeTitulo.setAttribute('colors', 'primary:#000000,secondary:#000000');
    iconeTitulo.setAttribute('stroke', '70');
    iconeTitulo.setAttribute('style', 'width:1.5em;height:1.5em');

    // inserção de cor aleatória ao fundo do ícone
    var fundoIconeCarrossel = document.getElementsByClassName('icone-carrossel');

    for (let i = 0; i < fundoIconeCarrossel.length; i++) {
        fundoIconeCarrossel[i].style.backgroundColor = generateColor();
    }

    var iconeLista = document.getElementsByClassName('icone-lista');

    for (let i = 0; i < iconeLista.length; i++) {
        iconeLista[i].setAttribute('src', 'https://cdn.lordicon.com/ibremrum.json');
        iconeLista[i].setAttribute('trigger', 'loop');
        iconeLista[i].setAttribute('colors', 'outline:#ffffff,primary:#30c9e8,secondary:#2516c7');
        iconeLista[i].setAttribute('style', 'width:60px;height:60px');
        
    }

    // pegar todos os itens com o ID/CLASS icone-fone
    var iconeCarrossel = document.getElementsByClassName('icone-fone');
    for (let i = 0; i < iconeCarrossel.length; i++) {
        iconeCarrossel[i].setAttribute('src', 'https://cdn.lordicon.com/xddtsyvc.json');
        iconeCarrossel[i].setAttribute('trigger', 'loop-on-hover');
        iconeCarrossel[i].setAttribute('colors','primary:#000000');
        iconeCarrossel[i].setAttribute('style', 'width:50px;height:50px');
        iconeCarrossel[i].setAttribute('delay', '500');
    }

    var iconePlay = document.getElementsByClassName('icone-play');
    console.log(iconePlay);
    for (let i = 0; i < iconePlay.length; i++) {
        iconePlay[i].setAttribute('src', 'https://cdn.lordicon.com/xdakhdsq.json');
        iconePlay[i].setAttribute('trigger', 'hover');
        iconePlay[i].setAttribute('colors', 'primary:#121331');
        iconePlay[i].setAttribute('style', 'width:50px;height:50px');
    }

}

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
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
}

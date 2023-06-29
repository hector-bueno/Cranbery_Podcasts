function inicio() {
    var iconeTitulo = document.getElementById('icone-titulo');
    iconeTitulo.setAttribute('src', 'https://cdn.lordicon.com/fpipqhrr.json');
    iconeTitulo.setAttribute('trigger', 'loop');
    iconeTitulo.setAttribute('colors', 'primary:#000000,secondary:#000000');
    iconeTitulo.setAttribute('stroke', '70');
    iconeTitulo.setAttribute('style', 'width:1.5em;height:1.5em');
}

function trocaDarkMode () {
    var botaoDarkMode = document.getElementById('dark-mode');
    botaoDarkMode.classList.toggle('dark-mode-on');

    var textoDarkMode = document.getElementById('texto-dark-mode');

    if (botaoDarkMode.classList.contains('dark-mode-on')) {
        textoDarkMode.innerHTML = " Light Mode";
    } else {
        textoDarkMode.innerHTML = "Dark Mode ";
    }
    // inserir aqui as alterações entre os modos light e dark
}
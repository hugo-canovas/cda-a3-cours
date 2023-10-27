var texte = document.querySelector('#texte');

texte.addEventListener('keypress', (event) => {
    var value = event.key;
    if(value < 'a' || value > 'z') {
        event.preventDefault();
        alert('Valeur non comprise entre a et z');
    }
})
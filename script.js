function afficherMessage() {
    alert('hello');
}

var intro = window.document.getElementById('intro');
// console.log(intro);
// console.log(intro.innerHTML);
// console.log(intro.textContent);

var rouges = document.getElementsByClassName('rouge');
// for (const rouge of rouges) {
//     console.log(rouge.innerHTML);
// }

var paragraphes = document.getElementsByTagName('p');
// for (const paragraphe of paragraphes) {
//     console.log(paragraphe.innerHTML);
// }

var notFirstParagraphes =  document.querySelectorAll('p:not(:first-child)');
// for (const notFirstParagraphe of notFirstParagraphes) {
//     console.log(notFirstParagraphe.innerHTML);
// }

var notFirstParagraphe =  document.querySelector('p:not(:first-child)');
// console.log(notFirstParagraphe.innerHTML);

var lien = document.querySelector('a');
// console.log(lien.getAttribute('href'));


function switchLink() {
    lien.setAttribute('href', 'https://www.google.com');
    lien.innerHTML = "Faites vos recherches"
}

var premierParagraphe = document.querySelector('p');
premierParagraphe.style.fontStyle = "italic";
// console.log(premierParagraphe.classList);
// console.log(premierParagraphe.className);

// var classes = premierParagraphe.classList;
// classes.remove('rouge');
// classes.add('bleu');
// classes.replace('rouge', 'bleu');
// classes.toggle('rouge');
// classes.toggle('bleu');
// console.log(classes.contains('rouge'));

function switchColor() {
    var paragraphes = document.querySelectorAll('p');
    for (const p of paragraphes) {
        var color = p.classList;
        color.toggle('bleu');
        color.toggle('rouge');
    }
}
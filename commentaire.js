var btn = document.querySelector('button');
// function avec addEventListener
btn.addEventListener('click', 
    function () {
        var commentaire = document.getElementById('commentaire');
        var list = document.getElementById('comments');
        // list.innerHTML += `<p>${commentaire.value}</p>`;
        var p = document.createElement('p');
        p.innerHTML = commentaire.value;
        list.appendChild(p);
        commentaire.value = "";
    }
);

// function onclick()
function todoList() {
    var commentaire = document.getElementById('commentaire');
    var list = document.getElementById('comments');
    // list.innerHTML += `<p>${commentaire.value}</p>`;
    var p = document.createElement('p');
    p.innerHTML = commentaire.value;
    list.appendChild(p);
    commentaire.value = "";
}

var somme = (a = 0, b = 0) => a + b;
// var somme = function (a = 0, b = 0) {
//     return a + b
// }
// console.log(somme());
// console.log(somme(2));
// console.log(somme(2,3));
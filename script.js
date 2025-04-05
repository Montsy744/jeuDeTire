console.log('connecté !');

/*let = variable qui change*/
/*const = variable constante*/
let titre = document.getElementById('titre');
titre.style.color = "white";

/*Je selectione et je stock*/
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
let compteur = 0;

btnRed.addEventListener('click', function(){
    add();
});
btnBlue.addEventListener('click', function(){
    add();
});


function add(){
    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = "score : "+compteur;
}

function generateRandomPositions(button) {
    for (let i = 1; i <= 4; i++) {
        const randomLeft = Math.random() * window.innerWidth + "px";
        const randomTop = Math.random() * window.innerHeight + "px";
        document.documentElement.style.setProperty(`--${button}-left${i}`, randomLeft);
        document.documentElement.style.setProperty(`--${button}-top${i}`, randomTop);
    }
}

function updatePositions() {
    generateRandomPositions("red");
    generateRandomPositions("blue");
}

// Met à jour les positions toutes les 2 secondes
setInterval(updatePositions, 2000);
updatePositions();

let min=1; 
let max=5;
let nbTentatives=1
let random = (Math.random() * (max - min)).toFixed(0); 
console.log(`Le nombre aléatoire est ${random}`);
do
{
    nombre = prompt(`Veuillez entrer un nombre`)
    if (nombre>random) {
        console.log(`Le nombre choisi est trop grand`);
    }
    if (nombre<random) {
        console.log(`Le nombre choisi est trop petit`);
    }
    nbTentatives=nbTentatives+1;
}
while ((nbTentatives<4) && (nombre!=random))
if (nombre==random) {
    alert(`Victoire!`)
}
else {
    alert(`You loose!`)
}
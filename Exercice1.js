let etoile = prompt(`Veuillez saisir le nombre d'étoiles que vous voulez`)
let texte = "";
if (etoile>=1 && etoile<11) {
// if (!((etoile<1)||(etoile>=11))) {
    for (let i=0;i<etoile;i++){
        texte = texte+"*"
    }
    console.log(`${texte}`);
    document.write(texte);
}
else {
    console.log(`Le nombre d'étoiles n'est pas correct`);
}

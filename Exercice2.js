let etoile =0
do
{
    etoile= parseInt(prompt(`Veuillez saisir le nombre d'étoiles que vous voulez`));
}
while((isNaN(etoile))||(etoile<1) || (etoile>11))
// entr 1 et 11
let texte = "";

    for (let i=0;i<etoile;i++){
        texte = texte+"*"
    }
    console.log(`${texte}`);

//    
// à la place de while, vérifier la saisie:
// 
//let mauvaiseSaisie=true
//do {
//mauvaiseSaisie = (isNaN(etoile)||(etoile<1)||(etoile>1));
//etoile = parseInt(prompt(`nb etoiles?`))
//if (mauvaiseSaisie)
//    console.log(`le nombre d'étoiles n'est pas correct`);
//}

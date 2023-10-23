let etoile =0
do
{
    etoile= prompt(`Veuillez saisir le nombre d'étoiles que vous voulez`)
}
while(etoile<1 && etoile>11)
// entr 1 et 11
let texte = "";

    for (let i=0;i<etoile;i++){
        texte = texte+"*"
    }
    console.log(`${texte}`);

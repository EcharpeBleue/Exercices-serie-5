let etoile = "*"

do

{
    Nbre = prompt(`Veuillez saisir le nombre d'étoiles voulus`)
    if ((Nbre<1 || Nbre>=11))
    console.log(`Le nombre d'étoiles n'est pas correct`);

} while(Nbre<1 || Nbre>=11);

for (let i=0;i<Nbre;i++)

{

    for (let j=0;j<Nbre-i;j++)

    {

        console.log(`${etoile.repeat(Nbre-i)}`);

    }
    
}

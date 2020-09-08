const name = "Yannik"; // 95% variables

let age = 32; // définir une variable qui peut etre modifier
age++;

console.log(age); // affiche a la console/écran

function afficherUtilisateur(nom, age) {
  //Fonction avec deux paramètre
  console.log(nom + " " + " " + age);
}

afficherUtilisateur(name, age);

const test = 1 + true;
const test2 = false + "9";
console.log(test2);

function additionner(a, b) {
  return a + b;
}
const additionnerLambda = (a, b) => a + b;
const resultat = additionnerLambda(2, 4);
console.log(resultat);

const fruits = ["Pomme", "Kiwi", "Fraise", "Mangue"];

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.push("Framboises");
fruits.forEach((f) => console.log(f));

const etudiant={
  matricule:'0212345',
  nom:'LP',
  prenom:'Bruent',
  cours:[{numero:'2E3'},{numero:'312'}]

}
console.log(`Bonjour mon nom est ${etudiant.nom}, ${etudiant.prenom}`);

const afficherNomEtudiant = ({nom}) => console.log(nom);

afficherNomEtudiant(etudiant);
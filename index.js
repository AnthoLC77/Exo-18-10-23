// Exo 1
let num = 23;
let txt = "33";
let tmp = 0;

tmp = parseInt(txt);
num = tmp;

/////////////////////////
/*
let nom = prompt("Quel est votre nom?");
let prenom = prompt("Quel est votre prenom?");
let age = prompt("Quel est votre age?");

alert(
  " Quel est votre nom ? " +
    nom +
    "\n" +
    "Quel est votre nom ? " +
    prenom +
    "\n" +
    "Quel est votre age ? " +
    age +
    "\n" +
    "---------------------------" +
    "\n" +
    "-------BIENVENUE-------" +
    "\n" +
    "---------------------------" +
    "\n" +
    "Votre nom est : " +
    nom +
    "\n" +
    "Votre prenom est : " +
    prenom +
    "\n" +
    "Votre avez " +
    age +
    " ans"
);
*/

// Exo 2
/*
let phrase = prompt("Entrer une phrase qui vous plait");
let maPhrase = "Je suis en distanciel aujourd'hui";
alert(maPhrase + " comporte " + maPhrase.length + " caractères");
let motPhrase = maPhrase.substring(10, 21);
alert(motPhrase.toLocaleUpperCase());
*/
// Exo 3
/*
let age = prompt("Quel âge avez vous ? ");

if (age <= 17) {
  console.log("Vous n'etes pas encore majeur");
} else if (age <= 49) {
  console.log("Vous êtes majeur mais pas encore senior");
} else if (age <= 59) {
  console.log("Vous êtes senior mais pas encore retraité");
} else {
  console.log("Vous êtes retraité, profitez de votre temps libre!");
}
*/
// Exo 4

/*
let nombreUn = Math.floor(prompt("Saisir un nombre"));
let nombreDeux = Math.floor(prompt("Saisir un deuxième nombre"));

if (nombreUn == nombreDeux) {
  console.log("Les nombres " + nombreUn + " et " + nombreDeux + " sont égaux");
} else {
  console.log(
    "Les nombres " + nombreUn + " et " + nombreDeux + " ne sont pas égaux"
  );
}*/
//Exo 5

let noteObtenu = Math.floor(prompt("Indiquer votre note entre 0 et 100"));

if (isNaN(noteObtenu)) {
  console.log("Ceci n'est pas une note");
} else {
  if (noteObtenu <= 59) {
    console.log("Insufissant");
  } else if (noteObtenu <= 69) {
    console.log("Suffisant");
  } else if (noteObtenu <= 79) {
    console.log("Bien");
  } else if (noteObtenu <= 89) {
    console.log("Tres bien");
  } else if (noteObtenu <= 100) {
    console.log("Excellent");
  }
}

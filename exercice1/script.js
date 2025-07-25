const { log } = require("console");
const readline = require("readline");

// Création de l'interface pour la console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Création des options de calcul numérotées
console.log("1/ Addition");
console.log("2/ Soustraction");
console.log("3/ Multiplication");
console.log("4/ Division");

// Demande de opération souhaité et 2 nombres à calculer
rl.question("Choisissez une option :", (option) => {
  rl.question("Entrer le premier nombre : ", (num1) => {
    rl.question("Entrer le deuxième nombre : ", (num2) => {
      // Convertir la chaîne de caractère en décimal pour les 2 nombres saisi
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      // Condition pour gérer quelle type de calcul retourner en fonction de l'option choisi (via le numéro)
      switch (option) {
        case "1":
          result = a + b;
          break;
        case "2":
          if (a > b) {
            result = a - b;
          } else {
            console.log(
              "Erreur : Le deuxième nombre est plus grand que le premier"
            );
            rl.close(); // Fermeture de l'interface
            return;
          }
          break;
        case "3":
          result = a * b;
          break;
        case "4":
          if (b !== 0) {
            result = a / b;
          } else {
            console.log("Erreur : Ne pas diviser par zéro");
            rl.close();
            return;
          }
          break;
        default:
          console.log("Option invalide");
          rl.close();
          return;
      }
      console.log(`Résultat : ${result}`);
      rl.close();
    });
  });
});

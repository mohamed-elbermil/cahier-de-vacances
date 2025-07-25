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

// Demande de calcul souhaité
rl.question("Choisissez une option :", (option) => {
  rl.question("Entrer le premier nombre : ", (num1) => {
    rl.question("Entrer le deuxième nombre : ", (num2) => {
      // Convertie la chaîne de caractère en décimal pour les 2 nombres saisi
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      // Condition pour gérer quelle type de calcul retourné en fonction de l'option choisis (via le numéro)
      switch (option) {
        case "1":
          result = a + b;
          break;
        case "2":
          result = a - b;
          break;
        case "3":
          result = a * b;
          break;
        case "4":
          if (b !== 0) {
            result = a / b;
          } else {
            console.log("Erreur : Ne pas diviser par séro");
            // Fermeture de l'interface
            rl.close();
            return;
          }
          break;
        default:
          console.log("Option invalide");
          rl.close();
          return;
      }
    });
  });
});

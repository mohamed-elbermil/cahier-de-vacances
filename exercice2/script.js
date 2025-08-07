const { log } = require('console');
const readline = require('node:readline');

// Création de l'interface pour la console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function qui génère un nombre aléatoire
function genererNombreMystere(niveau) {
    let min = 1;
    let max;

    switch (niveau) {
        case "facile":
            max = 50
            break;
        case "moyen":
            max = 100
            break;
        case "difficile":
            max = 500
            break;
    
        default:
            console.log('Niveau inconnu, par défaut vous jouerez en niveau moyen');
            max = 100
            break;
    }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Le jeu
function jouer(nombreMystere, tentative = 1) {
    rl.question(`Tentative ${tentative} - Devine le nombre : `, (response) => {
        const devine = parseInt(response)

        if (isNaN(devine)) {
            console.log("Ce n'est pas un nombre. Réessaie !");
            return jouer(nombreMystere, tentative);
        }

        if (devine < nombreMystere) {
            console.log("C'est plus ");
            jouer(nombreMystere, tentative +1);
        }else if (devine > nombreMystere) {
            console.log("C'est moins !");
            jouer(nombreMystere, tentative +1);
        } else {
            console.log(`Bravo ! Tu as trouver le ${nombreMystere} en ${tentative} tentative(s)`);
            rl.close();
        }
    })
}

// Function qui démarre le jeu
function start() {
    console.log("Choisis un niveau de difficulté (facile / moyen / difficile)");
    console.log("1. Facile ");
    console.log("2. Moyen ");
    console.log("3. Difficile ");

    

    rl.question('Tape le numéro de ton choix ', (choix) => {
        let niveau;

        switch (niveau) {
            case 1:
                niveau = "facile";
                break;
            case 2:
                niveau = "moyen";
                break;
            case 3:
                niveau = "difficile";
                break;
        
            default:
                console.log("Choix invalide. Vous jouerez par défaut avec le niveau moyen");
                niveau = moyen
                break;
        }

        const nombreMystere = genererNombreMystere(choix);
        console.log("Devinez le nombre mystère générer");
        jouer(nombreMystere);        
    })
}

start();


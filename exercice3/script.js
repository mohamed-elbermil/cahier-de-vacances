const { log } = require('console');
const readline = require('node:readline');

// Création de l'interface console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let taches = [];

function ajout(callback) {
    rl.question('Rédige le contenu de ta tâche : ', (description) => {
        rl.question('Quel est son status ? (faite, à faire) ', (status) => {
            const tache = {description,status};

            taches.push(tache);
            console.log("Tâche ajouté");
            console.log(taches);
            if (callback) callback();
            
            rl.close()           
        })
    })
}



function affichage(callback) {

            if (taches.length === 0) {
                console.log("Aucune tâche pour le moment.");
            } else {
                console.log("📋 Liste des tâches :");
                taches.forEach((item, index) => {
                    console.log(`${index + 1}. ${item.description} [${item.status}]`);
                });
            } if (callback) callback();
        }


function modification(callback) {
    if (taches.length === 0) {
        console.log("Il n'y a aucune tâches à modifier");
        return callback();
    }

    affichage(() => {
        rl.question('Quel numéro de tâche voulez-vous modifier ?', (num) => {
            const index = parseInt(num) -1;
    
            if (isNaN(index) || index < 0 || index >= taches.length) {
                console.log("Numéro invalide");
                return callback();
            } 

    })
        rl.question('Quel est le nouveau status ? (faite / à faire)', (nouveauStatus) => {
            nouveauStatus = nouveauStatus.toLowerCase().trim();

            taches[index].status = nouveauStatus
            console.log("Tâche mise à jour");
            console.log(`${index +1}. ${taches[index].description} [${taches[index].status}]`);
            if (callback) callback()            
        })
    })
}


function suppression() {
    rl.question('Quelle tâche voulez-vous supprimer : ', (num) => {
        return callback();
    } )
    
}


function menu() {
    console.log("Que souhaitez-vous faire ?");
    console.log("1. Ajouter une tâche");
    console.log("2. Afficher les tâches");
    console.log("3. Modifier une tâche");
    console.log("4. Supprimer une tâche");
    console.log("5. Quitter");
}
rl.question('Tapez le numéro de votre choix : ', (choix) => {
    switch (choix.trim()) {
        case "1":
            ajout(menu);
            break;
        case "2":
            affichage(menu);
            break;
        case "3":
            modification(menu);
            break;
        case "4":
            suppression(menu);
            break;
        case "5":
            console.log("Au revoir !");
            rl.close();
            break;
        default:
            console.log("Choix invalide, réessayer");
            menu();
            
    }
})

menu();

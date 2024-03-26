
// Creare un array di oggetti di studenti.
// Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
// Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.

const studenti = [
    {
        nome: 'Giulia',
        cognome: 'Ferri',
        eta: 22,
    },
    {
        nome: 'Andrea',
        cognome: 'Moretti',
        eta: 25,
    },
    {
        nome: 'Martina',
        cognome: 'Rossi',
        eta: 20,
    },
    {
        nome: 'Francesco',
        cognome: 'Russo',
        eta: 23,
    },
    {
        nome: 'Sara',
        cognome: 'Conti',
        eta: 26,
    },
    {
        nome: 'Lorenzo',
        cognome: 'Bianchi',
        eta: 21,
    },
    {
        nome: 'Chiara',
        cognome: 'Esposito',
        eta: 19,
    },
];  //array
console.log(studenti); //function

// prima ciclate con un ciclo for
// for (let i = 0; i < studenti.length; i++) {
//    console.log(studenti[i].nome + " " + studenti[i].cognome);
// }

// poi commentate il ciclo for e usate il forEach
studenti.forEach(function (studente) {
 console.log(studente.nome + " " + studente.cognome)
});     //metodo

// MILESTONE 2
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

 document.getElementById('formNuoviStudenti').addEventListener('submit', function(event) {
     event.preventDefault();

     //recuper i valori dei form
     let nomeElement = document.getElementById('formNome').value;
     let cognomeElement = document.getElementById('formCognome').value;
     let etaElement = parseFloat(document.getElementById('formEta').value);


    //creo un nuovo oggetto studente
     const nuovoStudente = {

        nome: nomeElement,
        cognome: cognomeElement,
        eta: etaElement,
    };

     //aggiungo il nuovo studente all'array di studenti
     studenti.push(nuovoStudente);

    // Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta
    // prima ciclate con un ciclo for
    // for (let i = 0; i < studenti.length; i++) {
    //     console.log(studenti[i].nome + " " + studenti[i].cognome);

    // }

    // poi commentate il ciclo for e usate il forEach
    studenti.forEach(function (studente) {
        console.log(studente.nome + " " + studente.cognome);
    });


 });







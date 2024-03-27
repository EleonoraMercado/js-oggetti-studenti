const students = [
    {
        firstName: 'Giulia',
        lastName: 'Ferri',
        age: 22,
    },
    {
        firstName: 'Andrea',
        lastName: 'Moretti',
        age: 25,
    },
    {
        firstName: 'Martina',
        lastName: 'Rossi',
        age: 20,
    },
    {
        firstName: 'Francesco',
        lastName: 'Russo',
        age: 23,
    },
    {
        firstName: 'Sara',
        lastName: 'Conti',
        age: 26,
    },
    {
        firstName: 'Lorenzo',
        lastName: 'Bianchi',
        age: 21,
    },
    {
        firstName: 'Chiara',
        lastName: 'Esposito',
        age: 19,
    },
];  //array
 console.log(students)

const tBodyElement = document.getElementById('table-body');
console.log(tBodyElement);

//per ogni studente
for (i = 0; i < students.length; i++) {
    const currentStudent = students[i]
    console.log(currentStudent);
    //recuperiamo nome
    const theFirstName = currentStudent.firstName;
    //recuperiamo cognome
    const theLastName = currentStudent.lastName;
    //recuperiamo età
    const theAge = currentStudent.age;

    console.log(theFirstName, theLastName, theAge);
    //creiamo il tag html per ogni tr:
    const trHTMLString = `
    <tr>
      <td>${theFirstName}</td>
      <td>${theLastName}</td>
      <td>${theAge}</td>
    </tr>
    ` 
console.log(trHTMLString);
    //aggiungiamo il tag nel tbody della tabella
    tBodyElement.innerHTML += trHTMLString; 
    //promemoria:+= di modo che gli elementi non sis sovrascrivano ma che se ne aggiunga uno nuovo.
};

//togliamo il comportamento di default del bottone
document.getElementById('formNewStudents').addEventListener('submit', function(event) {
    event.preventDefault();

     //recuper i valori dei form
     let firstNameElement = document.getElementById('firstName').value;
     let lastNameElement = document.getElementById('lastName').value;
     let ageElement = parseFloat(document.getElementById('age').value);

      //creo un nuovo oggetto studente
      const newStudent = {

        firstName: firstNameElement,
        lastName: lastNameElement,
        age: ageElement,
    };

    //aggiungo il nuovo studente all'array di studenti
    students.push(newStudent);

    //stampare i nuovi studenti nella tabella





});
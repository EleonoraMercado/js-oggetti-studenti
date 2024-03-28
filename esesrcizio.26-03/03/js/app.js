const students = [
    {
        firstName: 'Giulia',
        lastName: 'Ferri',
        age: 17,
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
        age: 15,
    },
    {
        firstName: 'Sara',
        lastName: 'Conti',
        age: 26,
    },
    {
        firstName: 'Lorenzo',
        lastName: 'Bianchi',
        age: 13,
    },
    {
        firstName: 'Chiara',
        lastName: 'Esposito',
        age: 16,
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

    // if (currentStudent.age > 18) {
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
    // }
};

const form = document.getElementById('formAddStudents');
console.log(form)
form.addEventListener('submit', addStudent);

//funzione che accetta un parametro di tipo evento
function addStudent(e) {

//disabilitare la propagazione del submit
e.preventDefault();

//recuperiamo i singoli input per recuperare il valore che viene inserito 
//alla compilazione del form
const theFirstName = document.getElementById('firstName').value;
const theLastName = document.getElementById('lastName').value;
const theAge = document.getElementById('age').value;

//con i valori si costruisce l'oggetto studente
const newStudent = {
    firstName: theFirstName,
    lastName: theLastName,
    Age : theAge,

};
console.log(newStudent)

//devo pushare il nuovo studente nell'array
students.push(newStudent)

console.log(students)

const tBodyElement = document.getElementById('table-body');
const trHTMLString = `
    <tr>
      <td>${theFirstName}</td>
      <td>${theLastName}</td>
      <td>${theAge}</td>
    </tr>
    ` 
    tBodyElement.innerHTML += trHTMLString; 
}

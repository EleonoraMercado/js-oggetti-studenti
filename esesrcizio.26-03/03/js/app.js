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


//per ogni studente
for (i = 0; i < students.length; i++) {
    let currentStudent = students[i]
    console.log(currentStudent)
    //recuperiamo nome
    const theFirstName = currentStudent.firstName
    //recuperiamo cognome
    const theLastName = currentStudent.lastName
    //recuperiamo età
    const theAge = currentStudent.age

    console.log(theFirstName, theLastName, theAge)
    //creiamo il tag html per ogni tr:
    //<tr>
    //  <td>firstName</td>
    //  <td>lastName</td>
    //  <td>age</td>
    //</tr>
    //aggiungiamo il tag nel tbody della tabella
}
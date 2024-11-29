// write an interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create an array of students from a list of students
const student1: Student = {
    firstName: 'Manuel',
    lastName: 'Bahati',
    age: 21,
    location: 'Alexandria'
};

const student2: Student = {
    firstName: 'Fally',
    lastName: 'Ipupa',
    age: 35,
    location: 'Kinshasa'
};

const studentsList: Student[] = [student1, student2];

//  create the table element
const table = document.createElement('table');
document.body.appendChild(table);

// create the table header row
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Populate the table with students data
studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 20,
    location: 'Los Angeles'
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Get the body element
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Create a table element
const table: HTMLTableElement = document.createElement('table');

// Create and append the table header
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';

thead.append(th1);
thead.append(th2);
table.append(thead);

// Create and append the table body
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const column1: HTMLTableCellElement = document.createElement('td');
  const column2: HTMLTableCellElement = document.createElement('td');

  column1.innerText = student.firstName;
  column2.innerText = student.location;

  column1.style.border = '1px solid gray';
  column2.style.border = '1px solid gray';
  column1.style.padding = '.5rem';
  column2.style.padding = '.5rem';

  row.append(column1);
  row.append(column2);
  table.append(row);
});

// Append the table to the document body
body.append(table);

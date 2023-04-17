const employees = {
  id: [67, 48, 29],
  name: ['Hitanshu', 'Ninad', 'Amandeep'],
  salary: [75000, 82000, 98000]
};

// a) Print an array of all employee ids
console.log(employees.id);

// b) Print count of employees
console.log(employees.id.length);

// c) Print the name of the employee according to their id { key: value }
const namesById = {};
for (let i = 0; i < employees.id.length; i++) {
  const id = employees.id[i];
  const name = employees.name[i];
  namesById[id] = name;
}
console.log(namesById);

// d) Store the salaries of all employees in an array
const salaries = employees.salary;
console.log(salaries);

// e) Calculate the average salary the company is paying to its employees
const sum = salaries.reduce((acc, curr) => acc + curr, 0);
const average = sum / salaries.length;
console.log(average);

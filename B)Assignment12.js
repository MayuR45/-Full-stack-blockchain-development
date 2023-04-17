let students = new Map();
students.set('id', [1, 2, 3]);
students.set('name', ['Hitanshu', 'Ninad', 'Amandeep']);
students.set('scores', [90, 88, 92]);

// Print student names using map function
let names = students.get('name').map(name => name);
console.log(names);

// Delete student scores using map function
let scores = students.get('scores').map(score => "");
students.set('scores', scores);

// Display 1 parameter (only value)
console.log(students.get('name'));

// Display 2 parameters (value + key)
console.log(`id ${students.get('id')}`);
console.log(`name ${students.get('name')}`);
console.log(`scores ${students.get('scores')}`);

// Display 3 parameters (value + key + map)
console.log(`id ${students.get('id')}`);
console.log(students);
console.log(`name ${students.get('name')}`);
console.log(students);
console.log(`scores ${students.get('scores')}`);
console.log(students);

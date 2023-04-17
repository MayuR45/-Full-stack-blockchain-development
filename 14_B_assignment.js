let hospitals = [
    {
        "id": 1,
        "name":"Hospital A",
        "location":"Delhi",
        "noOfBeds":450,
        "availability":"Yes"
    },
    {
        "id": 2,
        "name":"Hospital B",
        "location":"Pune",
        "noOfBeds":150,
        "availability":"No"
    },
    {
        "id": 3,
        "name":"Hospital C",
        "location":"Pune",
        "noOfBeds":350,
        "availability":"Yes"
    }
];

// Filter by number of beds > 200
let beds200 = hospitals.filter(hospital => hospital.noOfBeds > 200);
console.log(beds200);

// Filter by availability = Yes
let available = hospitals.filter(hospital => hospital.availability === "Yes");
console.log(available);

// Filter by location = Pune
let pune = hospitals.filter(hospital => hospital.location === "Pune");
console.log(pune);

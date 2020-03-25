



let leo = {name: 'Leo', age: 5, color: 'black', weight: '75 lbs'};

let smoke = {name: 'Smoke', age: 13, color: 'white', weight: '60 lbs'};

let casey = {name: 'Casey', age: 12, color: 'white and brown', weight: '50 lbs'};

let ozlo = {name: 'Ozlo', age: 14, color: 'black', weight: '75 lbs'};

let bailey = {name: 'Bailey', age: 11, color: 'golden', weight: '70 lbs'};

const dogs = [leo, smoke, casey, ozlo, bailey];


for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
}

function logOutThings() {
    console.log("Here are your " + dogs.length + " things");
}

logOutThings();
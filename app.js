let favMovie = (name = 'world', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is: ${movie}`);
favMovie();

favMovie("Paranormal Activity");
favMovie();

favMovie('Jeremiah', 'Paranormal Activity');
favMovie();

favMovie('Sonia', 'Paul Blart: Mall Cop');

let getFirstName = name => {
    let first = name.split(' ');
    return first[0];
}

let getFirstNameConcise = name => name.split(' ')[0];

console.log(getFirstName('Gordon Freeman'));
console.log(getFirstNameConcise('Elon Musk'));

let returnObj = (x, y) => {
    return {exp: Math.pow(x, y),
        prod: x * y};
}

let obj = returnObj(2, 5);
console.log(`exponent of (2, 5): ${obj.exp}
product of (2, 5): ${obj.prod}`);

let logNLF = (name, location, favFood) => console.log(`name: ${name}
location: ${location}
favorite food: ${favFood}`);

let testArray = ['Jeremiah', 'Birmingham', 'Ramen'];

logNLF(...testArray);

let name = 'Jeremiah';

let takeName = name => [...name];

let nameArray = takeName('Jeremiah');
for (i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}
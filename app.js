// simple way of creating array
// best performance
const arr = [1,2,3];
console.log(arr);

// has special behaviour
// const moreNumbers = Array(5);
// console.log(moreNumbers);

// way less better peformance
// const yetMoreNumbers = Array.of(1);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

// create array from another variable
const arrListItems = Array.from(listItems);
console.log(arrListItems);

// value can we store from array 
const anotherArr = ['Babayaga', 1, {moreDetail : []}];
const hobbies = ['Cooking', 'Sports'];

const analyticsData = [[5, 3.1], [31,3,2.1]];
for (const data of analyticsData){
  for(const dataPoint of data){
    console.log(dataPoint);
  }
}
// we can store anything regarding the data

// Adding data in the last row using push()
const thisArray = ['Japanese', 'British'];
thisArray.push('Korean');
console.log(thisArray); // ['Japanese', 'British', 'Korean']

// Adding data in the first row using unshift()
thisArray.unshift('China'); // low peformance
console.log(thisArray) // ['China','Japanese', 'British', 'Korean']

// removing data in the last row using pop();
const poppedValue = thisArray.pop();
console.log(thisArray); // ['China','Japanese', 'British']

// removing data using in the first row using shift()
const shiftedValue = thisArray.shift();
console.log(thisArray); // ['Japanese', 'British']

// Changing the array data 
thisArray[1] = 'Espanol';
console.log(thisArray); // ['Japanese', 'Espanol'];

// thisArray[5] = 'Germany'; // rarely used
// console.log(thisArray); // ['Japanese', 'Espanol', empty × 3, 'Germany']

// Adding value into array with splice() 
thisArray.splice(0,0, 'Indonesia');
console.log(thisArray); // ['Indonesia', 'Japanese', 'Espanol']

// deleting value into array with splice()
thisArray.splice(2, 1);
console.log(thisArray); //['Indonesia', 'Japanese']

// selecting the last row using minus index is allowed in splice()
thisArray.splice(-1, 0, 'Filipine');
console.log(thisArray); // ['Indonesia', 'Filipine', 'Japanese']

// thisArray.splice(0);
// console.log(thisArray); // will empty the array


// copying value and create new array using slice()
const newArray = thisArray.slice(); 
// remember array is a reference variable so if you want to create the exact same new array use slice();
console.log(newArray); // ['Indonesia', 'Filipine', 'Japanese']

// copying specific value with slice()
const brandNewArray = thisArray.slice(1,2);
console.log(brandNewArray); // [ 'Filipine']

const grabArray = thisArray.slice(1);
console.log(grabArray);// [ 'Filipine', 'Japanese']


// this wrongNewArray just hold the address of this array
const wrongNewArray = thisArray;
thisArray.push('France'); // wrongNewArray is also changed even though we are changing thisArray
console.log(wrongNewArray); // ['Indonesia', 'Filipine', 'Japanese', 'France']

// Combine array & store value in the new array with concat()
const concatedArray = thisArray.concat(['Italia, Greece']);
console.log(concatedArray); // ['Indonesia', 'Filipine', 'Japanese', 'France', 'Italia, Greece']
console.log(thisArray); // ['Indonesia', 'Filipine', 'Japanese', 'France']

// Retrieving index with indexOf() & lastIndexOf()
// this works fine with the primitive values but not for the reference values
const numbersArray = [1, 2.1, 4.3, 6243.2, 4.3, 246.2];
console.log(numbersArray.indexOf(4.3)); // 2 
console.log(numbersArray.lastIndexOf(4.3)); // 4
console.log(numbersArray.includes(4.3)); // true 
console.log(numbersArray.indexOf(4.3) !== -1); // true

// reference values using indexOf()
const referenceArray = [{name: "Bruh" , hobby : 'gaming'},{name : "Bro", hobby : 'studying'}];
console.log(referenceArray.indexOf({name: "Bruh"})); // -1

// finding stuff using find() findIndex()
// keep in mind that find didn't create new array

// find()
const bruhObject = referenceArray.find((element , index, objName) => {
  return element.name === 'Bruh'; // {name : Bruh}
  // return index == 1; // {name: 'Bro', hobby: 'studying'}
  // return objName = {name: "Bruh" , hobby : 'gaming'}; // {name: "Bruh" , hobby : 'gaming'}
});

// findIndex()
const maxIndex = referenceArray.findIndex((element, index, objName) => {
  return element.hobby === "studying"; // 1 
})

console.log(bruhObject);
console.log(maxIndex);
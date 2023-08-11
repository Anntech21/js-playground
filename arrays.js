// length of colors: 4
//last index in colors:3
// last value = green

let color1 = "red";
let color2 = "blue";
let color3 = "yellow";
let color4 = "green";

let colors = ["red", "blue", "yellow", "green"];
let evenNumbers = [4, 2, 6, 12, 1024];

//let badPracticeMixedArray = ["Colin", 43, true];

let books = ["Hackers", "Capitalism", "Unicorn"];
//let colorsAgain = [color1, color2, color3, color4];
let colorsAgain = [color1, color2.toUpperCase(), color3, color4];
console.log(colorsAgain);

let bookIHaventReadYet = books[1];
//books[3] is going to show up as index undefined in console
//books[2] is going to show up as index Unicorn in console. Its a 0 based counting.
books[0]; //> "Hackers"
books[0][1]; //> 'a' its going to count characters from 0,1 which is H,a.

let apple = books[0];
let banana = apple[1];
let mango = books[0].slice(0, 4).toUpperCase();

let myBookCollection = ["Uni, Invisibles", ["Mockingjay", "Catching Fire "]];
//myBookCollection [2][2]; arrays in arrays answer "Catching Fire"

// .length is always the number of items in that array
// you can evaluate something INSIDE the square brackets
myBookCollection[15 - 14];
books[evenNumbers[1]];
books[books.length - 1]; // length - last item which will console as unicorn

//we changing the value ITSELF in array not reassigning.
//we have new renters in the house example, same house, same array, same variable,just changing mutating the value
colors[1] = "fuschia"; //in console it will look like ['red', 'fuschia', 'yellow', 'green']

let bookHighlights = books[0] + " " + "and" + " " + books[1];
//array item[variable] + "string" + array item[variable];

colors.push("lavender");
//console shows 5 values now adds at last
colors.push("gold", "cyan", "goldenrod");

colors.pop();
//removes last
colors.pop();

colors.shift();
colors.unshift("maroon", "purplr", "orange", "teal");
//(9) ['maroon', 'purplr', 'orange', 'teal', 'fuschia', 'yellow', 'green', 'lavender', 'gold']

let firstName ="Colin"
firstName = firstNmae.toUpperCase();


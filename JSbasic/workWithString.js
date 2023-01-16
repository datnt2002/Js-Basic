// var fullName = "Day la dau \\";

// console.log(fullName);

// var first = "dat";
// var last = "ngu";

// console.log(`Toi la: ${first} ${last}`);

var myString = "Hoc js tai f8!";

//1.Length
console.log(myString.length);
//2. Find index
console.log(myString.indexOf("js", 6));
//3. Cut string
console.log(myString.slice(-3, -1));
//4. Replace
console.log(myString.replace(/js/g, "JavaScript"));
//5.Convert to upper case
console.log(myString.toUpperCase());
//6.Convert to lower case
console.log(myString.toLowerCase());

//7.Trim
console.log(myString.trim());
//8.Split
var language = "Java, PHP, Scr";
console.log(language.split(", "));
//9. Get a charater by index
console.log(myString.charAt(4));

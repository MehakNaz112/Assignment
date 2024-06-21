// ARRAY ASSIGNMENT 2
//Rearrange an array using array method to form the sentence "I am a satudent of GIAC".
//Step:1 (SCRAMBLED ARRAY)
//Start with an array of element in a scrambled order,like:
var scrambledArray = ["students", "of", true, 123, "am", "a", "GIAIC", "I"];
//Step:2 (MODIFY THE ARRAYS)
/*Use method like split(),join,push(),pop(),shift(),unshift() to:
==>Convert non-strings(booleans,numbers)to strings if needed.
==>Split elements into character arrays(optional).
==>Rearrange characters or elements in the desired order(modify original array or create temporary arrays).*/
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAC";
//Step:3
//Use join() to combine elements back into single string:"I am student of GIAC".
var arrays = scrambledArray.join("");
console.log(arrays);

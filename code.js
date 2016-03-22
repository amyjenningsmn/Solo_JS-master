var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//  1. * Iterate through the stringList and produce the following output:
// "Months listed are March, April, May".
var monthsListed = "Months listed are ";
for (var i=0; i < stringList.length; i++) {
  if (i < stringList.length - 1) {
    monthsListed += stringList[i] + ", ";
  } else {
    monthsListed += stringList[i];
  }
}
console.log('Prob 1:', monthsListed);

// 2. * Console log the last element in numList using .length to get the index.
for (var j = 0; j < numList.length; j++) {
  var lastNumber = 0;
  lastNumber += numList[j];
}
console.log('Prob 2:',lastNumber);


// 3. * Iterate through numList, output all numbers as single String
var numberString = "";
for (var k = 0; k < numList.length; k++) {
  numberString += numList[k].toString();
}
console.log('Prob 3:', numberString);

// 4. * Iterate through numList and add all of the elements together and console log the total.
var sum = 0;
for (var l = 0; l < numList.length; l++) {
  sum += numList[l];
}
console.log('Prob 4:', sum);

// 5. * If the second element in boolList is true, add the first and last elements in numList.
// Otherwise multiply the second element in numList by itself. Console log the output.
if (boolList[1] === true) {
  var firstNum = numList[0];
  var lastNum = numList.length-1;
  var sum = firstNum + lastNum;
  console.log('Prob 5:',sum);
} else {
   var otherSum = numList[1] * numList[1];
   console.log(otherSum);
}

// 6. * Iterate through boolList, if the value is true console log the equivelent index in numList.
for (var b = 0; b < boolList.length; b++) {
  var indexNum = 0;
  indexNum++;
  if (boolList[b] === true) {
    var captureNum = indexNum;
    var findIndex = numList[indexNum];
  }
}
console.log('Prob 6:', numList[captureNum]);

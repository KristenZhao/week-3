/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each
function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
/////////////////////////// Conversion 1 ------------ Code from Lab2 from Week2 ////////////////////////
// // Here's an array that we need to loop through:
var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];
// Original for loop:
// // Here's the variable we need to hold our count in:
// var exampleSum = 0; // To count of the strings
//
// // A loop for summing the contents of theArray
// for (var i = 0; i < theArray.length; i++) {
//   var arrayValue = theArray[i];
//   if (typeof arrayValue === 'string') {         // String case
//     exampleSum = exampleSum + arrayValue.length
//   } else if (typeof arrayValue === 'number') {  // Number case
//     exampleSum = exampleSum + arrayValue
//   } else {                                      // Otherwise
//     console.log("Not sure how to proceed with value:", arrayValue)
//   }
// }
// //console.log(exampleSum);
// /* =====================
//
// Start your code below
//
// ===================== */
var exampleSum = 0;
var iteratee = _.iteratee(function(item){
  if (typeof item === 'string'){
    exampleSum += item.length;
    console.log('exampleSum is: ',exampleSum);
  } else if (typeof item === 'number') {
    exampleSum += item;
    console.log('exampleSum is: ', exampleSum);
  } else{
    console.log('cannot process this value: ', item);
  }
});
_.each(theArray,iteratee);
//


/////////////////////////// Conversion 2 ------------ Code from Lab2 from Week2 ////////////////////////
_.each(theArray,function(i){console.log(i)});

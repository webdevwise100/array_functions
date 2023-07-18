// Modifications

// 1. push()
// const array1 = [1, 2, 3, 4, 5];
// const newLength = array1.push(6, 7);
// console.log("array1 after push is = " + array1);
// console.log("array1 newLength is = " + newLength);

// 2. pop()
// const array2 = [1, 2, 3, 4, 5];
// const removedElement = array2.pop();
// console.log("array2 after pop is =" + array2);
// console.log("removedElement is = " + removedElement);

// 3. shift()
// const array3 = [1, 2, 3, 4, 5];
// const removedElement = array3.shift();
// console.log("array3 after shift is =" + array3);
// console.log("removedElement is = " + removedElement);

// 4. unshift()
// const array4 = [1, 2, 3, 4, 5];
// const newLength = array4.unshift(6, 7);
// console.log("array4 after unshift is =" + array4);
// console.log("newLength is = " + newLength);

// 5. slice()
// const array5 = [1, 2, 3, 4, 5];
// const newArray = array5.slice(1, 4);
// console.log("array5 after slice is =" + array5);
// console.log("newArray is = " + newArray);

// 6. splice()
// const array6 = [1, 2, 3, 4, 5];
// const removedElement = array6.splice(2, 2, 6, 7);
// console.log("array6 after splice is =" + array6);
// console.log("removedElement is = " + removedElement);

// 7. sort()
// const array7 = [7, 3, 6, 1, 9];
// console.log("array7 sorted is now = " + array7.sort());

// 8. fill()
// const array8 = [1, 2, 3, 4, 5];
// const returnValue = array8.fill(0, 2, 4);
// console.log("array8 after fill is now = " + array8);
// console.log("returnValue is = " + returnValue);

// 9. copyWithin()
// const array9 = [1, 2, 3, 4, 5];
// array9.copyWithin(0, 2, 4);
// console.log("array9 after copyWithin() is =" + array9);

//Iteration

// 10. forEach()
// const array10 = [1, 2, 3, 4, 5, 6];
// array10.forEach((element) => {
//   console.log("array element is = " + element * 2);
// });

// 11. map()
// const array11 = [1, 2, 3, 4, 5];
// const mapReturned = array11.map((element) => {
//   console.log("element is = " + element);
//   return element * 2;
// });
// console.log("array11 is =" + array11);
// console.log("mapReturned value is =" + mapReturned);

// 12. filter()
// const array12 = [1, 2, 3, 4, 5];
// const filteredArray12 = array12.filter((element) => element % 2 === 0);
// console.log("array12 is now =" + array12);
// console.log("filteredArray is now = " + filteredArray12);

// 13. reduce()
// const array13 = [1, 2, 3, 4, 5];
// const sum = array13.reduce(
//   (accumlator, currentValue) => accumlator + currentValue.toString()
// );
// console.log("array13 is now =" + array13);
// console.log("sum is now =" + sum);

// // 14. reduceRight()
// const array14 = [1, 2, 3, 4, 5];
// const returnedArray = array14.reduceRight(
//   (accumlator, currentValue) => accumlator + currentValue.toString()
// );
// console.log("array14 returnedArray is now =" + returnedArray);

// 3. Retrival / Manipulation

// 15. find()
// const array15 = [1, 2, 3, 4, 5];
// const foundElement = array15.find((element) => element > 2);
// console.log("array15 is =" + array15);
// console.log("foundElement is = " + foundElement);

// 16. findIndex()
// const array16 = [1, 2, 3, 4, 5];
// const foundIndex = array16.findIndex((element) => element > 2);
// console.log("array16 is =" + array16);
// console.log("foundIndex is = " + foundIndex);

// 17. some()
// const array17 = [1, 2, 3, 4, 5];
// const hasNumber = array17.some((element) => element > 6);
// console.log("array17 is = " + array17);
// console.log("hasNumber is = " + hasNumber);

// 18. every()
// const array18 = [1, 2, 3, 4, 5];
// const hasEveryElementG0 = array18.every((element) => element > 0);
// console.log("array18 is = " + array18);
// console.log("hasEveryElementG0 is = " + hasEveryElementG0);

// 19. indexOf()
// const array19 = [1, 2, 3, 4, 5];
// const firstIndex = array19.indexOf(6);
// console.log("firstIndex is = " + firstIndex);

// 20. lastIndexOf()
// const array20 = [1, 2, 3, 4, 5, 1, 2, 3, 4];
// console.log("lastIndexof3 is = " + array20.lastIndexOf(6));

// 21. includes()
// const array21 = [1, 2, 3, 4, 5, 6];
// console.log("includes7 is = " + array21.includes(7));

//Creation / Conversions

// 22. from()
// const array22 = "Hello";
// const newArray22 = Array.from(array22);
// console.log("newArray22 is now =" + newArray22);

// 23. of()
// const array23 = Array.of(1, 2, 3);
// console.log("array23 is now = " + array23);

// 24. isArray()
// console.log("array23 is array? = " + Array.isArray(array23));

// 25. toString()
// const array25 = [1, 2, 3, 4, 5];
// const arrayString = array25.toString();
// console.log("array25 is = " + array25);
// console.log("arrayString is = " + arrayString);

// 26. join()
// const array26 = [1, 2, 3, 4, 5, 6];
// console.log("joinedArray is = " + array26.join("-"));

// 27. concat()
// const array27 = [1, 3, 4];
// const array28 = [7, 3, 2];
// const newArray = array27.concat(array28);
// console.log("concatenated array is now =" + newArray);

//Flattening / Nesting

// 28. flat()
// const array28 = [1, [2, [3, [4, [5]]]]];
// const flattenedArray = array28.flat(4);
// console.log("array28 is =" + array28);
// console.log("flattenedArray is = " + flattenedArray);

// 29. flatMap()
// const array29 = [1, 2, 3];
// const flatMapArray = array29.flatMap((e) => [e * 2]);
// console.log("flatMapArray is = " + flatMapArray);

// 30. sort() -> descending
const array30 = [8, 2, 5, 7, 3, 2];
const sortedArray = array30.sort();
console.log("sorted array is =" + sortedArray);
const descArray = array30.sort((a, b) => b - a);
console.log("descending sorted array is =" + descArray);

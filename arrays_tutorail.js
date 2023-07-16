// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
const array1 = [1, 2, 3];
const newLength = array1.push(4, 5);
console.log("push() - array1:", array1); // [1, 2, 3, 4, 5]
console.log("push() - newLength:", newLength); // 5

// 2. pop(): Removes the last element from an array and returns that element.
const array2 = [1, 2, 3];
const removedElement = array2.pop();
console.log("pop() - array2:", array2); // [1, 2]
console.log("pop() - removedElement:", removedElement); // 3

// 3. shift(): Removes the first element from an array and returns that element.
const array3 = [1, 2, 3];
const removedElement2 = array3.shift();
console.log("shift() - array3:", array3); // [2, 3]
console.log("shift() - removedElement:", removedElement2); // 1

// 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
const array4 = [2, 3];
const newLength2 = array4.unshift(0, 1);
console.log("unshift() - array4:", array4); // [0, 1, 2, 3]
console.log("unshift() - newLength:", newLength2); // 4

// 5. concat(): Combines two or more arrays and returns a new array.
const array5 = [1, 2];
const array6 = [3, 4];
const newArray3 = array5.concat(array6);
console.log("concat() - newArray3:", newArray3); // [1, 2, 3, 4]

// 6. slice(): Extracts a portion of an array into a new array without modifying the original array.
const array7 = [1, 2, 3, 4, 5];
const newArray4 = array7.slice(1, 4);
console.log("slice() - newArray4:", newArray4); // [2, 3, 4]

// 7. splice(): Changes the contents of an array by removing, replacing, or adding elements in-place.
const array8 = [1, 2, 3, 4, 5];
const removedElements = array8.splice(2, 2, 6, 7);
console.log("splice() - array8:", array8); // [1, 2, 6, 7, 5]
console.log("splice() - removedElements:", removedElements); // [3, 4]

// 8. forEach(): Executes a provided function once for each array element.
const array9 = [1, 2, 3];
array9.forEach((element) => {
  console.log("forEach() - element:", element);
});
// Output:
// forEach() - element: 1
// forEach() - element: 2
// forEach() - element: 3

// 9. map(): Creates a new array by performing a function on each array element.
const array10 = [1, 2, 3];
const mappedArray = array10.map((element) => element * 2);
console.log("map() - mappedArray:", mappedArray); // [2, 4, 6]

// 10. filter(): Creates a new array with all elements that pass a test specified by a function.
const array11 = [1, 2, 3, 4, 5];
const filteredArray = array11.filter((element) => element % 2 === 0);
console.log("filter() - filteredArray:", filteredArray); // [2, 4]

// 11. reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
const array12 = [1, 2, 3, 4, 5];
const sum = array12.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("reduce() - sum:", sum); // 15

// 12. reduceRight(): Similar to reduce(), but works from right to left in the array.
const array13 = [1, 2, 3];
const concatenatedString = array13.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue.toString(),
  ""
);
console.log("reduceRight() - concatenatedString:", concatenatedString); // "321"

// 13. find(): Returns the first element in the array that satisfies a provided testing function.
const array14 = [1, 2, 3, 4, 5];
const foundElement = array14.find((element) => element > 3);
console.log("find() - foundElement:", foundElement); // 4

// 14. findIndex(): Returns the index of the first element in the array that satisfies a provided testing function.
const array15 = [1, 2, 3, 4, 5];
const foundIndex = array15.findIndex((element) => element > 3);
console.log("findIndex() - foundIndex:", foundIndex); // 3

// 15. some(): Checks if at least one element in the array satisfies a provided testing function.
const array16 = [1, 2, 3, 4, 5];
const hasEvenNumber = array16.some((element) => element % 2 === 0);
console.log("some() - hasEvenNumber:", hasEvenNumber); // true

// 16. every(): Checks if all elements in the array satisfy a provided testing function.
const array17 = [1, 2, 3, 4, 5];
const allEvenNumbers = array17.every((element) => element % 2 === 0);
console.log("every() - allEvenNumbers:", allEvenNumbers); // false

// 17. indexOf(): Returns the first index at which a given element can be found in the array.
const array18 = [1, 2, 3, 4, 5, 3];
const firstIndex = array18.indexOf(3);
console.log("indexOf() - firstIndex:", firstIndex); // 2

// 18. lastIndexOf(): Returns the last index at which a given element can be found in the array.
const array19 = [1, 2, 3, 4, 5, 3];
const lastIndex = array19.lastIndexOf(3);
console.log("lastIndexOf() - lastIndex:", lastIndex); // 5

// 19. includes(): Determines whether an array includes a certain element.
const array20 = [1, 2, 3, 4, 5];
const includesThree = array20.includes(3);
console.log("includes() - includesThree:", includesThree); // true

// 20. reverse(): Reverses the order of the elements in an array in-place.
const array21 = [1, 2, 3, 4, 5];
array21.reverse();
console.log("reverse() - array21:", array21); // [5, 4, 3, 2, 1]

// 21. sort(): Sorts the elements of an array in-place and returns the sorted array.
const array22 = [3, 2, 1, 4, 5];
array22.sort();
console.log("sort() - array22:", array22); // [1, 2, 3, 4, 5]

// 22. fill(): Changes all elements in an array to a static value, from a start index to an end index.
const array23 = [1, 2, 3, 4, 5];
array23.fill(0, 2, 4);
console.log("fill() - array23:", array23); // [1, 2, 0, 0, 5]

// 23. copyWithin(): Copies a sequence of array elements within the array to another position.
const array24 = [1, 2, 3, 4, 5];
array24.copyWithin(0, 2, 4);
console.log("copyWithin() - array24:", array24); // [3, 4, 3, 4, 5]

// 24. flat(): Creates a new array with all sub-array elements concatenated recursively up to a specified depth.
const array25 = [1, [2, [3, [4, 5]]]];
const flattenedArray = array25.flat(2);
console.log("flat() - flattenedArray:", flattenedArray); // [1, 2, 3, 4, 5]

// 25. flatMap(): Maps each element using a mapping function, then flattens the result into a new array.
const array26 = [1, 2, 3];
const mappedArray2 = array26.flatMap((element) => [element * 2]);
console.log("flatMap() - mappedArray2:", mappedArray2); // [2, 4, 6]

// 26. from(): Creates a new, shallow-copied array from an array-like or iterable object.
const arrayLike = "Hello";
const newArray5 = Array.from(arrayLike);
console.log("from() - newArray5:", newArray5); // ["H", "e", "l", "l", "o"]

// 27. of(): Creates a new array with the specified elements.
const newArray6 = Array.of(1, 2, 3);
console.log("of() - newArray6:", newArray6); // [1, 2, 3]

// 28. isArray(): Checks if a value is an array.
console.log("isArray() - Array.isArray([1, 2, 3]):", Array.isArray([1, 2, 3])); // true

// 29. toString(): Returns a string representing the specified array and its elements.
const array27 = [1, 2, 3];
const arrayString = array27.toString();
console.log("toString() - arrayString:", arrayString); // "1,2,3"

// 30. join(): Joins all elements of an array into a string.
const array28 = [1, 2, 3];
const joinedString = array28.join("-");
console.log("join() - joinedString:", joinedString); // "1-2-3"

// 31. length: Property that specifies the number of elements in an array (read-only).
const array29 = [1, 2, 3];
console.log("length - array29.length:", array29.length); // 3

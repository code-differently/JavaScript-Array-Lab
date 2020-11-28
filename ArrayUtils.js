class ArrayUtils {
  isEmpty(array) {
    return array.length == 0;
  }

  append(original, value) {
    original.push(value);
    return original;
  }

  clone(original) {
    let copyArray = [];
    for (let e of original) {
      copyArray.push(e);
    }
    return copyArray;
  }

  subArray(original, from, to) {
    const newArray = [];
    for (let i = from; i < to; i++) {
      if (i < original.length) {
        newArray.push(original[i]);
      } else {
        break;
      }
    }
    return newArray;
  }

  equals(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  fill(original, value) {
    for (let i = 0; i < original.length; i++) {
      original[i] = value;
    }
    return original;
  }

  indexOf(original, value) {
    for (let i = 0; i < original.length; i++) {
      if (original[i] === value) return i;
    }
    return -1;
  }

  remove(original, value) {
    let newArray = [];
    for (let e of original) {
      if (e !== value) newArray.push(e);
    }

    return newArray;
  }

  reverse(original) {
    let reversedArr = [];
    for (let e of original) {
      reversedArr.unshift(e);
    }
    return reversedArr;
  }
}

// Create reference to class
const arrayUtils = new ArrayUtils();

// Given
let array = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];

// Print returned values
// console.log(arrayUtils.isEmpty(array));
// console.log(arrayUtils.append(array, 6));
// console.log(arrayUtils.clone(array));
// console.log(arrayUtils.subArray(array, 2, 4));
// console.log(arrayUtils.equals(array, array2));
// console.log(arrayUtils.fill(array, 20));
// console.log(arrayUtils.indexOf(array, 3));
// console.log(arrayUtils.remove(array, 3));
console.log(arrayUtils.reverse(array, 3));

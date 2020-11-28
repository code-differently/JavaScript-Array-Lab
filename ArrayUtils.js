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

  fill(original, value) {}

  indexOf(original, value) {
    return -1;
  }

  remove(original, value) {
    return original;
  }

  reverse(original) {}
}

const arrayUtils = new ArrayUtils();
let array = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];
let array3 = ["cat", "dog", "penguine"];

console.log(arrayUtils.isEmpty(array));
console.log(arrayUtils.append(array, 6));
console.log(arrayUtils.clone(array));
console.log(arrayUtils.subArray(array, 2, 4));
console.log(arrayUtils.equals(array, array2)); // should return false because append() adds another element to the first array.

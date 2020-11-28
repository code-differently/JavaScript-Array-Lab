class ArrayUtils {
  isEmpty(array) {
    return array.length == 0;
  }

  append(original, value) {
    return original;
  }

  clone(original) {
    return original;
  }

  subArray(original, from, to) {
    return original;
  }

  equals(arr1, arr2) {
    return false;
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

let arrayUtils = new ArrayUtils();

let arr = [1, 2, 3, 4, 5];
let arr2 = [];
console.log(arrayUtils.isEmpty(arr));

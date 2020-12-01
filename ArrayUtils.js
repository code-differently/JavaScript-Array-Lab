class ArrayUtils{

    isEmpty(array){return false;}

    isEmpty(array) {
        if (array.length == 0) {
            return true 
        } else {
            return false;
        }
    }

    append(original, value){return original;}

        append(original, value) {
            original.push(value);
            return original;
        }

    clone(original){return original;}

        clone(original) {
            let newArray = [];
            newArray = original;
            return newArray;
        }

    subArray(original, from, to){return original;}

        subArray(original, from, to) {
            let newArray = [];
            for (let i = from; original[i] <= original[to]; i++) {
                newArray[newArray.length] = i;
            } 
            return newArray;
        }

    equals(arr1, arr2){return false;}

        equals(arr1,arr2) {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        }

    fill(original, value){}

        fill(original, value) {
            for (let i = 0; i < original.length; i++) {
                original[i] = value;
            } return original;
        }

    indexOf(original, value){return -1;}

        indexOf(original, value) {
            for (let i = 0; i < original.length; i++) {
                if (original[i] === value) return i;
            }
            return -1;
        }

    remove(original, value){return original;}

        remove(original, value) {
            let newOriginal = [...original]
            for (i = 0; i < newOriginal.length; i++){
                if (newOriginal[i] === value) {
                    delete newOriginal[i];
                } 
                return newOriginal;
            }
        }

    reverse(original){}

        reverseArray(arr) {
            let newArray = [];
            for (let i = arr.length - 1; i >= 0; i--) {
            newArray.push(arr[i]);
            }
            return newArray;
        }
}

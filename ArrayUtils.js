class ArrayUtils{

    //Problem 1
    function isEmpty(array){
        if (array.length < 1){
            return true
        } else {
        return false;
        }
    }

    //Problem 2
    function append(original, value){
        original.push(value);
        return original;
    }

    //Problem 3
    
    let copyArr = [];
    function clone(array){
        for (let value of array) {
            copyArr.push(value)
        }
        return copyArr;
    }

    //Problem 4
    let newArr = [];
    function subArray(array, from, to){
        for(let i = array[from]; i <= array[to]; i++) {
        newArr = array.push(i);
        return newArr;
        }
    }

    //Problem 5
    function equals(arr1, arr2){
        if(!arr1 || !arr2) {
            return false;
        }
        if(arr1.length !== arr2.length){
            return false;
        }
        for(let i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[i]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }

    //Problem 6
    function fill(original, value){
        for( i = 0; i < original.length; i++) {
            original[i] = value;
        }
        return original;
    }

    //Problem 7
    function indexOf(original, value){
        for(i = 0; i < original.length; i++){
            if (original[i] == value){
                return i;
            }
        }
        return -1;
    }

    //Problem 8
    let newArr = [];
    function remove(original, value){
        newArr = clone(original);
        let index = indexOf(original, value);
        newArr.splice(index, 1);
        return newArr;
    }

    //Problem 9
    function reverse(original){
        original.reverse();
        return original;
    }
    
}
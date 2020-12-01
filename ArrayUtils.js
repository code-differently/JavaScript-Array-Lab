//class ArrayUtils
    //1.
    function empty(array) {
        if (array.length === 0) {
            return true;
          return false;
        }
    } 
    
    //2.
    function append(original, value) {
        original.push(value)
        return original;
    }

    //3.
    function clone(original) {
        let array = [];
        for (let value of array)
            original.push(value)
        return array;
    }

    //4.
    let newArray = [];
    function subArray(original, from, to) {
        for (let i = array[from]; i <= array[to]; i++ ) {
        newArray = array.push(i);
        return original;
        }
    }

    //5. 
     function equals(arr1, arr2) {
         if(arr === arr2) {
             return true;
         } else {
             return false;
         }
     }

    //6.
    function fill(original, value){
        for(i = 0; i < original.length; i++) {
            original[i] = value;
         } return original; 
    }

    //7.
    let i = original
    function indexOf(original, value) {
        for(let i = 0; i < original.length; i++) {
            let i = original[i];
            if(original[1] == value) {
            }return i;
        }
        return -1;
    }

    //8.
    function remove(original, value) {
        let original2 = [...original]
        for (i = 0; 1 < original2.length; i++)
            if (original2[i] === value){
            }
        return original;
        }
    

    //9.
    function reverse(original){
        let Arr = [];
        for (let i = original.length - 1; i >= 0; i--) {
            Arr.push(original[i]);
        }
        return Arr
        }
    
    
    
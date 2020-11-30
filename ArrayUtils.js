class ArrayUtils{
   
    // Step 1
    empty(array){
        if (array.length === 0){
            return true;
        } else{
            return false;
        }
    }
    
// Step 2
    append(original, value){
        original.push[value];
        return original;
    }

    // Step 3
    clone(array){
        let newArray = [];
        newArray = array;
        return newArray;
    }

    // Step 4
    subArray(original, from, to){
        return original;
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

 


    // Step 5
    equals(arr1, arr2){   
        if(array === array2){
        return true;
    } else{
        return false;
    }
}
    
    // Step 6
    fill(original, value){
        for(i = 0; i < original.length; i++){
            original[i] = value;
        }   return original;
    }

    // Step 7
    indexOf(original, value){
        for(i = 0; i < original.length; i++){
            let i= original[1];
           if(original[i] == value){
            return i;
        }
        } return -1;
    }

    // Step 8
    remove(original, value){ 
        return original;
        let newArray = [];
        for (let e of original) {
          if (e !== value) newArray.push(e);
        }
    
        return newArray;
}


    // Step 9
    reverseArray(arr) {
        let newArray = [];
        for (i = arr.length - 1; i >= 0; i--) {
          newArray.push(arr[i]);
        }
        return newArray;
      }
    
}


// Create reference
const arrayUtils = new ArrayUtils();

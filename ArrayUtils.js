class ArrayUtilities {
    isEmpty(array){
     return array.length == 0; 
    }
    

    append(original, value){
        original.push(value);
        return original;
    }


    clone(original) {
        let clone = original
        return clone;
    }
        


    subArray(original, from, to) {
        let thisArray = []

        for (let i = from; original[i] <= original[to]; i++){
            thisArray[thisArray.length] = original[i]
        }
        return thisArray
    }


   
    equals(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) 
            return false;
        }
        return true;
      }
    

    fill(original, value){
        for( i = 0; i < original.length; i++) {
            original[i] = value;
        }
        return original;
    }


    
    indexOf(original, value) {
        for (let i = 0; i < original.length; i++){
           if(original[i] === value) {
              return i
              break
            }
        }
        return -1;
    }


   
    remove(original, value){
        let newOrig = [...original]

        for (let i = 0; i < newOrig.length; i++) {
            if (newOrig[i] === value) {
                delete newOrig[i]
                return newOrig
                break
            }
        }
    }
    

   
    reverse(original) {
        original.reverse();
        return original;
    }  

}



const arrayUtil = new ArrayUtilities();
    const isEmpty = arrayUtil.isEmpty([]);
    console.log({isEmpty});

    let array = [8, 1, 9, 2, 7];
    let array2 = [55, 33, 44, 22, 11];
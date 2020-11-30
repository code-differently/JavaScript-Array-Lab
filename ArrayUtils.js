class ArrayUtils{

    isEmpty(array){
        if (array.length === 0){
            return true
        } return false
    }

    append(array, newValue){
        array[array.length] = newValue;
        return array
    }

    clone(original){
        let newArr = []
        newArr = original
        return newArr 
    }

    subArray(original, from, to) {
        let newArray = []
    
        for (let i = from; original[i] <= original[to]; i++){
            newArray[newArray.length] = original[i]
        }
        return newArray
    }

    equals(arr1, arr2){
        if (arr1.length !== arr2.length) return false;
    
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
    
        return true;
    }


    fill(original, value) {
    for (let i = 0; i < original.length; i++){
        original[i] = value
    }
    return original
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
        let top = original.length - 1;
        let bottom = 0;
        let swap = 0;
    
        while (top - bottom >= 1) {
        swap = original[bottom];
        original[bottom] = original[top];
        original[top] = swap;
        bottom++;
        top--;
        }
        return original
    }
    
}

const arrayUtils = new ArrayUtils();




test = [0, 1, 2]


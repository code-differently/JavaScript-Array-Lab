    //1- isEmpty(array) Returns true if the array is empty
    function isEmpty(array) {
        if (array.length === 0) {
            return true;
        }
    } 

    //2- append(original, value){return original;}
    function append(original, value) {
        original.push(value)
        return original;
    }

 
    //3- clone(original){return original;}
    function clone(original) {
        let array = [];
        for (let value of array)
            original.push(value)
        return array;
    }

    //4 subArray(original, from, to){return original;}
    let liveArray = [];
    function subArray(original, from, to) {
        for (let i = array[from]; i <= array[to]; i++ ) {
        liveArray = array.push(i);
        return original;
        }
    }


    //5- equals(arr1, arr2){return false;}
     function equals(arr1, arr2) {
         if(arr1 === arr2) {
             return true;
         } else {
             return false;
         }
     }

    //6- fill(original, value){}
    function fill(original, value){
        for(i = 0; i < original.length; i++) {
            original[i] = value;
         } return original; 
    }


    //7- indexOf(original, value){return -1;}
    let i = original
    function indexOf(original, value) {
        for(let i = 0; i < original.length; i++) {
            let i = original[i];
            if(original[1] == value) {
        return -1;
    }


    //8- remove(original, value){return original;}
    function remove(original, value) {
        let original2 = [...original]
        for (i = 0; 1 < original2.length; i++)
            if (original2[i] === value){
            }
        return original;
        }


    //9- reverse(original){}
    function reverse(original){
        let Array = [];
        for (let i = original.length - 1; i >= 0; i--) {
            Arr.push(original[i]);
        }
        return Array
        }
    }
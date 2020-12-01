
class ArrayUtils{  
  
    // part1
 isEmpty(array){
    if (array.length == 0){
        return true} 
       else { 
           return false}              
  }

    //  part2
 append(original, value){
     original.push(value);
     return original;
    }

    // part3
  clone(original){
    let clone = original
    return clone;}

    // part4
    subArray(original, from, to) {
    let newArr = []
    for (let i = from; original[i] <= original[to]; i++){
        newArr[newArr.length] = original[i]
    }
    return newArr
    }

    // part5
  equals(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i])
        return false;
    }
    return true;
  }
          
    // part6
    fill(original, value){
        for ( let i=0; i < original.length; i++ ){
            original[i] = value;
        }
         return original;
    }

    // part7
    indexOf(original, value) {
        for (let i = 0; i < original.length; i++){
           if(original[i] === value) {
              return i
              break
            }
        }
        return -1;
    }

    // part8
    remove(original, value){
        let newOriginal = [...original]
        for (let i = 0; i < newOriginal.length; i++) {
            if (newOriginal[i] === value) {
                delete newOriginal[i]
                return newOriginal
                break
            }
        }
    }

     // part9
    reverse(original){
       let rev = [];
       for (let i = original.length - 1; i >= 0; i-- ){
           rev += original[i];
       }
       return rev
    }  
}
   

const arrayUtils = new ArrayUtils();

let testOriginal = [1,4,5,6,7,15,20]

// arrayUtils.isEmpty(testArray)
// arrayUtils.append(testOriginal,testValue)
// arrayUtils.clone(testOriginal)
// arrayUtils.subArray(testOriginal, testFrom,testTo)
// arrayUtils.equals(testArr1, testArr2)
// arrayUtils.fill(testOriginal,testValue)
// arrayUtils.indexOf(testOriginal,testValue)
// arrayUtils.remove(testOriginal,testValue)
// arrayUtils.reverse(testOriginal)

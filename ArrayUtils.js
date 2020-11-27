// class ArrayUtils{

    // isEmpty(array){return false;}

    // append(original, value){return original;}

    // clone(original){return original;}

    // subArray(original, from, to){return original;}

    // equals(arr1, arr2){return false;}

    // fill(original, value){}

    // indexOf(original, value){return -1;}

    // remove(original, value){return original;}

    // reverse(original){}
    
// }

//isEmpty
function empty(array){
    if (array.length === 0){
        return true
    } return false
}

//append
function app(array, newValue){
    array[array.length] = newValue;
    return array
}

//clone
function cloning(original){
    let newArr = []
    newArr = original
    return newArr
}

//subArray
function subArr(original, from, to) {
    let newArray = []
    for (i = from; original[i] <= original[to]; i++){
        newArray[newArray.length] = original[i]
    }
    return newArray
}

//equals
function equal(arr1, arr2){
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
let test1 = [1, 2, 3, 4, 5, 6]

//fill
function filled(original, value) {
    for (let i = 0; i < original.length; i++){
        original[i] = value
    }
    return original
}

//indexOf 
function indexed(original, value) {
    for (let i = 0; i < original.length; i++){
       if(original[i] === value){
          return i;
          break
        }
    }
    return -1;
}

//remove
function removal(original, value){
    let newOrig = [...original]
    for (i = 0; i < newOrig.length; i++) {
        if (newOrig[i] === value) {
            delete newOrig[i]
            return newOrig
            break
        }
    }
}

//reverse
function reversed(original) {
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


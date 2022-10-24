function calc(array){
    let result = 0
    for ( let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])){
            return result += calc(array[i])
        }
        result += array[i]
    }
    return result;
}

console.log(calc([1,2,3,[3,4,4]]))
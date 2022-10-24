let  exp = true
function primerNumber(num){
    for(let i = 2; i < num / 2; i++){
        if (num % i === 0){
            exp = false
        }
    }

    if ( exp ){
        console.log(true)
    }else{
        console.log(false)
    }
}

primerNumber(11);
primerNumber(24);
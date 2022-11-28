//Sum with arguments KEYWORD
function sum(){
    let count = 0;
    Object.values(arguments).forEach(el => {
        count += el;
    })
    return count
}

// console.log(sum(1,2,3))


function sum1(...args){
    let count = 0;
    args.forEach(el => {
        count += el;
    })
    return count
}

console.log(sum1(1,2,3))
//Monkeypatching curring

Function.prototype.myCurry = function(numArgs){
    let nums = [];
    let that = this;

    return function _myCurry(num){
        nums.push(num);

        if(nums.length < numArgs){
            return _myCurry;
        } else {
            return that(...nums);
        }
    }
}

let temp = sum.myCurry(3);
console.log(temp(1)(2)(3))
// invoking on the actual function SUM
function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}


function curriedSum(numArgs){
    let numbers = [];
    // let fnc = this;

    return function _curriedSum(num){
        numbers.push(num);
        if(numbers.length < numArgs){
            return _curriedSum;
        } else{
            return sum(...numbers)
        }
    }

}
// const sumCurry = curriedSum(4);
// console.log(sumCurry(5)(30)(20)(1)); // => 56

// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }
  
//   sumThree(4, 20, 6); // == 30
  
//   // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
//   // or more briefly:
//   sumThree.curry(3)(4)(20)(6); // == 30
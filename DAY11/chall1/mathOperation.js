function addNumbers(num1, num2) {
    return num1 + num2;
   }
function subNumbers(num1, num2) {
    return num1 - num2;
   }
   function mulNumbers(num1, num2) {
    return num1 * num2;
   }
   function divNumbers(num1, num2) {
    return num1 / num2;
   }
const resultAdd = addNumbers(6,9);
const resultSub = subNumbers(6,9)
const resultMul = mulNumbers(4,5)
const resultDiv = divNumbers(8,2)


// console.log(resultAdd);
// console.log(resultSub);
// console.log(resultMul);
// console.log(resultDiv);
////////
setTimeout(()=>{
    console.log('in the timeout');
},3000);
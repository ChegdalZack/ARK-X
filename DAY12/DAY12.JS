// const EventEmiter = require ('events');
// const emitter = new  EventEmiter ();

// emitter.on('messageLogged',function(){
//     console.log('listner called');
// });

// emitter.emit('messageLogged')

const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/////////////////
// Prompt the user for their name
// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);},

//   rl.question('What is your phone number? ', (phone) => {
//     console.log(`Hello, ${phone}!`);

//   // Close the readline interface
//   rl.close();
// }));
/////////////////////////:

let num1 = Math.floor(Math.random() * 20 + 1);
let num2 = Math.floor(Math.random() * 20 + 1);

let answer = num1 + num2;

rl.question( `What is ${num1}+${num2}?= `, (guess) =>{
    if(Number(guess) == answer){
        rl.close();
        }else{
            rl.setPrompt(`\n Your answer : ${guess} is wrong  please try again \n`)
            rl.prompt();
            rl.on('line',(guess)=>{
                 if(Number(guess)=== answer){
                    rl.close();
                } else{
                    rl.setPrompt(`\n Your answer : ${guess} is wrong  please try again \n`)
                    rl.prompt();

            }})
        }
    });
    rl.on('close',()=>{
        console.log('correct!!');
    })



    
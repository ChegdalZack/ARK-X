// setTimeout(()=>{
//     console.log('Hello')
// },4000)

// const { fetch } = require("undici-types");

// const { default: fetch } = require("node-fetch");

// const numbers = [1, 2, 3];
// const sum = numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue,0); // 10
// console.log(sum);


// const items = numbers
// .filter(value => {return value >= 0})
// .map(n => ({value:n}))
// .filter(obj=>obj.value > 1);

// // const items = filtered.map(n => ({value:n}));

// const [first,second,third,fourth="red"] = numbers;



// console.log(first,second,third,fourth)




///////////////////////////////////////
// This declares an asynchronous arrow function 
const fetchUserData = async () => { 
    try { // catching and handling exeptions
        //It uses the fetch function to make an HTTP request to .
        //the specified URL and awaits the result. The await 
        //keyword is used because fetch returns a Promise. The result is stored in the data constant
        const data = await fetch("https://dummyjson.com/users");
        const result = await data.json();

        processUserData(result);

    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}


const processUserData = (result) => {
    result.users.forEach((user) => {
        const { firstName, lastName, age } = user;
        console.log("Name:", firstName + " " + lastName, "Age: " + age);
    });

    const totalMaleAge = summarizeMaleAge(result.users);
    console.log("Total age of male users:", totalMaleAge);
};

const summarizeMaleAge = (users) => {
    return users.reduce((totalAge, user) => {
        if (user.gender.toLowerCase() === 'male') {
            return totalAge + user.age;
        }
        return totalAge;
    }, 0);
}
fetchUserData();


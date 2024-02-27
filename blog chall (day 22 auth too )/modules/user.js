const fs = require('fs');


// const readUsers = () => {
//     const fileContent = fs.readFileSync("C:/Users/hp/Desktop/ARK-X/JS/Arkx/ARKX CHallenges/blog chall/modules/users.json", 'utf8');
// return JSON.parse(fileContent);

//   };
  
  const createUsers = (users) => {
      fs.writeFileSync("C:/Users/hp/Desktop/ARK-X/JS/Arkx/ARKX CHallenges/blog chall (day 22 auth too )/modules/users.json",
      JSON.stringify(users));
    
  };


  module.exports = {createUsers};
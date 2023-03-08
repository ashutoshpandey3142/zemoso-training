// Q) Write a program to demonstrate how a function can be passed as a parameter to another function.
// This process is known as callback function in ehich you pass function as a parameter to another function

function zemoso(){
    console.log("Welcome to zemoso!");
}
function zemosoIntern(callback){
    callback();
    console.log("How is the josh Interns?");
}
zemosoIntern(zemoso);

// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
const firstletter=(firstName,lastName)=>{
    return firstName[0]+lastName[0];
};
console.log(firstletter('Roger','Waters'));
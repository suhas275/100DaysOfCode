// to attach JS File in HTML file declare 
//  🎯<script src="./script.js"></script> declare this after all html element below so that HTML elements can loadfirst


// this code output is  shown in the console

// console.log("hello world");



// 🚀1.how to name a variable
// In program code =>🔥 a.camelCase and b.PascalCase of writing varialble is practiced more often.

// var courseName ="React JS";
// console.log(courseName);

// const uid="abc123";

// var fullName="MadaraUchiha";
// var email="Madara@gmail.com";
// var password="12345";
// var confirmPassword = "12345";
// var courseCount = 0;
// var isLoggedInFromGoogle = false;


// console.log(uid);
// console.log("Full Name is:"+fullName);
// console.log(email);
// //this is JS good practice for declaration
// console.log(`      
//     With Unique ID:${uid}
//     User is : ${fullName}
//     and his email is : ${email}
//     and users the password : ${password}
// `);



// 🚀2. Operators

// var sellingPrice =199;
// var listingPrice =799;

// var discountPercent = ((listingPrice - sellingPrice)/listingPrice)*100;

// console.log(`Discount percentage is :${discountPercent}`);

// displayDiscountPercentage = Math.round(discountPercent);

// console.log(displayDiscountPercentage + "% off");

// var result = listingPrice > sellingPrice;

// console.log(typeof result);


// 🚀3. Conditional Statement 

// var temperature;

// temperature=49;

// if(temperature<20){
//     console.log("it's cold outsode");
// }

// if(temperature < 30){
//     console.log("It's moderate outside");
// }else {
//     console.log("It's HOT outside");
// }

// Ex=2🔥
// var email =true;
// var facebook = false;
// var google = true;

// if(email || facebook || google){
//     console.log("login Success");
// }

// //Ex=3 🔥Switch case
// var user = "admin";

// switch (user) {
//     case "admin":
//         console.log("you get full access");
//         break;
//     case "subadmin":
//         console.log("gets access to create/delete course");
//         break;
//     default:
//         break;
// }

// $$$$$$$$$$$$$$$$$$$$$$    Functions   $$$$$$$$$$$$$$$$$$$$$$$$ 


// //Ex:1🔥
// function sayHello(name) {
//     console.log("hello there, Madara");
//     console.log(`Hello there ,${name}.How are ypu`);
// }

// sayHello("MadaraUchiha");
// sayHello("Madara");

// $$$$$$$$$$$$$$$$$$$$$$    Arrays and Loops   $$$$$$$$$$$$$$$$$$$$$$$$ 

// // //Ex:1🔥
// var countries = ["India", "USA", "Japan", "Turkey"];

// var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

// console.log(countries[3]);
// console.log(states[3]);

// // 🚀 Objects
// var user = {
//     firstName: "Madara",
//     lastName: "Uchiha",
//     role: "Admin",
//     loginCount: 32,
// }

// console.log(user.firstName);
// console.log(user["lastName"]);

// console.log(user.loginCount);
// user.loginCount = 44;
// console.log(user.loginCount);
// console.table(user);

// // 🚀 forEach

// const myStates =[
//     "Rajasthan",
//     "Delhi",
//     "Assam",
// ];

// myStates.forEach((s) =>(console.log(s)));

// const names =["Youtube", "facebook", "instagram", ];
// const symbols ={
//     yt:"youtube",
//     ig:"Instragram",

// };

// for(const n in symbols){
//     console.log(`Key is:${n}`);
// }

// $$$$$$$$$$$$$$$$$$$$$$    Clousers  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// function doAddition(x) {
//     return function (y){
//         return x+y;
//     };
// }

// var add5 = doAddition(4);
// console.log(add5(5));


// // 🚀 This Keyword
// console.log(this);

// var user = {
//   firstName: "Hitesh",
//   courseCount: 4,
//   getCourseCount: function () {
//     console.log("LINE 7", this);
//     function sayHello() {
//       console.log("Hello");
//       console.log("LINE 10", this);
//     }
//     sayHello();
//   },
// };

// user.getCourseCount();

// // 🚀
// const uno = () => {
//   return "I am One";
// };

// // const dos = () => {
// //   setTimeout(() => {
// //     return "I am two";
// //   }, 3000);
// // };

// const dos = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("I am two");
//     }, 3000);
//   });
// };

// const tres = () => {
//   return "I am Three";
// };

// const callMe = async () => {
//   let valOne = uno();
//   console.log(valOne);

//   let valTwo = await dos();
//   console.log(valTwo);

//   let valThree = tres();
//   console.log(valThree);
// };

// callMe();


// // 🚀 Celsius to fahrenheit conversion

// const celsius = prompt("Enter a celsius value: ");

// // calculate fahrenheit
// const fahrenheit = (celsius * 1.8) + 32


// // display the result
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

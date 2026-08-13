// const data = require("./data.json")
// const fs = require("fs");

// let passed = true;
// console.log("Registration Test\n");



// // TC 01
// if(fs.existsSync("index.html"))
// {
//     console.log("TC 01 : index.html exist : psss");
// }
// else{
//     console.log("TC 01 : index.html exist :fail");
//     passed = false;
// }
//     // TC 02
//     if(fs.existsSync("style.css"))
//     {
//         console.log("TC 02 : style.css exist : Pass");
//     }
//     else{
//         console.log("TC 01 : index.html exist :fail");
//         passed = false;

//     }
//     // TC 03
//     if(fs.existsSync("data.json"))
//     {
//         console.log("TC 03 : data.json file exist : Pass");
//     }
//     else
//     {
//         console.log("TC 03 : data.json file exist : Fail");
//         passed = false;
//     }


// // TC 06 Name validation
// if(data.name.trim()!=="")
// {
//         console.log("TC 05 Name validation : Pass");
// }
// else
// {
// console.log("TC 05 Name validation : Fail");
// }
// // TC 07 Emal validation

// if(data.email.includes("@"))
// {
//     console.log("TC 08 email validation : Pass");
// }
// else{
// console.log("TC 08 email validation : Fail");
// }


// // TC 08 mobile validaition..
// if(data.phone.length == 10)
// {
//      console.log("TC 08 mobile no validation : Pass");
// }
// else
// {
//      console.log("TC 08 mobile no validation : Fali");
// }


// //TC 09 branch validation
// if(data.branch!=="")
// {
//         console.log("TC 09 branch validation :Pass ");
// }
// else
// {
// console.log("TC 09 branch validation :Fail ");
// }

// // TC 10 password validation
// if(data.password.length >=6)
// {

//     console.log("TC 10 password validaion : Pass");
// }
// else{
//     console.log("TC 10 password validaion : Fail");
// }


// // //TC 05 Name validation
// // const name = "vaibhav sharma";
// // if(data.name == name)
// // {
// //     console.log(`${name} record exist`);
// // }
// // else
// // {
// //     console.log("rahul sharma record does not exist");
// // }



const data = require("./data.json");
const fs = require("fs");

let passed = true;

console.log("Registration Test\n");

// TC 010
if (fs.existsSync("index.html")) {
    console.log("TC 01 : index.html exists : Pass");
} else {
    console.log("TC 01 : index.html exists : Fail");
    passed = false;
}

// TC 02
if (fs.existsSync("style.css")) {
    console.log("TC 02 : style.css exists : Pass");
} else {
    console.log("TC 02 : style.css exists : Fail");
    passed = false;
}

// TC 03
if (fs.existsSync("data.json")) {
    console.log("TC 03 : data.json exists : Pass");
} else {
    console.log("TC 03 : data.json exists : Fail");
    passed = false;
}

// Check whether any user exists
if (data.length === 0) {
    console.log("\nNo registered user found.");
    process.exit();
}

// Take the latest registered user
const user = data[data.length - 1];

console.log("\nTesting latest registered user:\n", user);

// TC 05 Name validation
if (user.name.trim() !== "") {
    console.log("TC 05 : Name validation : Pass");
} else {
    console.log("TC 05 : Name validation : Fail");
    passed = false;
}

// TC 06 Email validation
if (user.email.includes("@")) {
    console.log("TC 06 : Email validation : Pass");
} else {
    console.log("TC 06 : Email validation : Fail");
    passed = false;
}

// TC 07 Mobile validation
if (user.phone.length === 10) {
    console.log("TC 07 : Mobile validation : Pass");
} else {
    console.log("TC 07 : Mobile validation : Fail");
    passed = false;
}

// TC 08 Branch validation
if (user.branch !== "") {
    console.log("TC 08 : Branch validation : Pass");
} else {
    console.log("TC 08 : Branch validation : Fail");
    passed = false;
}

// TC 09 Password validation
if (user.password.length >= 6) {
    console.log("TC 09 : Password validation : Pass");
} else {
    console.log("TC 09 : Password validation : Fail");
    passed = false;
}



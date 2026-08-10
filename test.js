const data = require("./data.json")
const fs = require("fs");

let passed = true;
console.log("Registration Test\n");



// TC 01
if(fs.existsSync("index.html"))
{
    console.log("TC 01 : index.html exist : psss");
}
else{
    console.log("TC 01 : index.html exist :fail");
    passed = false;
}
    // TC 02
    if(fs.existsSync("style.css"))
    {
        console.log("TC 02 : style.css exist : Pass");
    }
    else{
        console.log("TC 01 : index.html exist :fail");
        passed = false;

    }
    // TC 03
    if(fs.existsSync("data.json"))
    {
        console.log("TC 03 : data.json file exist : Pass");
    }
    else
    {
        console.log("TC 03 : data.json file exist : Fail");
        passed = false;
    }


// TC 06 Name validation
if(data.name.trim()!=="")
{
        console.log("TC 05 Name validation : Pass");
}
else
{
console.log("TC 05 Name validation : Fail");
}
// TC 07 Emal validation

if(data.email.includes("@"))
{
    console.log("TC 08 email validation : Pass");
}
else{
console.log("TC 08 email validation : Fail");
}


// TC 08 mobile validaition..
if(data.phone.length == 10)
{
     console.log("TC 08 mobile no validation : Pass");
}
else
{
     console.log("TC 08 mobile no validation : Fali");
}


//TC 09 branch validation
if(data.branch!=="")
{
        console.log("TC 09 branch validation :Pass ");
}
else
{
console.log("TC 09 branch validation :Fail ");
}

// TC 10 password validation
if(data.password.length >=6)
{

    console.log("TC 10 password validaion : Pass");
}
else{
    console.log("TC 10 password validaion : Fail");
}


// //TC 05 Name validation
// const name = "vaibhav sharma";
// if(data.name == name)
// {
//     console.log(`${name} record exist`);
// }
// else
// {
//     console.log("rahul sharma record does not exist");
// }


// TC 011 failed test cases..

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
    console.log("TC 03 : data.json file exit : Pass");
}
else
{
    console.log("TC 03 : data.json file exit : Fail");
    passed = false;
}


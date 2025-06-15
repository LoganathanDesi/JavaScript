//simple if

let a = 10;
let b = 20;

if (a<b){
    console.log("a is less than b"); //prints this line
}


// if withe else
if (a>b){
    console.log("a is greater than b");
} else {
    console.log("b is greater than a"); // this will get printed
}

//nest if
let browser = "chrome";

if (browser == "edge"){
    console.log("Open Edge browser");
} else if(browser == "firefox"){
    console.log("open firefox browser");
} else if (browser == "chrome"){
    console.log("open Chrome browser"); // prints this line
}else {
    console.log("enter valid browser");
}

// instead writing this nested if ... write switch case.
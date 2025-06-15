// for loop

for (let i=0;i<10;i++){
    console.log(i); //prints from 0 to 9
}
console.log("---------")
for (let i=1;i<=10;i++){
    console.log(i); //prints from 0 to 9
}
console.log("---------")

//for ... of loop
let arrArray = [1,2,3,4,5]

for(let element of arrArray){
    console.log(element);
}
console.log("---------")
//using array index
for (let i =0; i<arrArray.length ; i++){
    console.log(arrArray[i]);
}

console.log("---------")
// while loop
let count = 1
while(count <=10){
    console.log(count); // prints 1 to 10
    count++;
}

console.log("---------")
// do loop
let newcount =1;
do{
    console.log(newcount);
    newcount++

}while(newcount<=5)

console.log("---------")
// do loop with a break
let newcc =1;
do{
    console.log(newcc);
    newcc++
    if (newcc == 8) // prints till 7
    { break;

    }

}while(newcc<=10) 
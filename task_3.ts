
                                                    // Task 3 Part 1
let data: string[] = ['Apple', 'Orange', 'Banana'];             //Array Declaration
console.log("Item No  | Details");
for (let a=0; a<data.length;a++){                               //Array data Printing
    console.log(a," \t |",data[a]);
}

console.log("During pop()",data.pop());                         //pop() call
data.push("Grapes");
console.log("After Push()");                                    //push() call
console.log("Item No  | Details");
for (let a=0; a<data.length;a++){
    console.log(a," \t |",data[a]);
}

data.shift();                                               //shift() call
console.log("After shift()");
console.log("Item No  | Details");
for (let a=0; a<data.length;a++){
    console.log(a," \t |",data[a]);
}

data.unshift("Strawberry");                                 //unshift() call
console.log("After unshift()");
console.log("Item No  | Details");
for (let a=0; a<data.length;a++){
    console.log(a," \t |",data[a]);
}


// Task 3 Part 2
let data2: string[] = ['Apple', 'Orange', 'Banana','Onion','Tomatto','Potato'];               //Array declaration
console.log(" slice() Working......." );
console.log(" Before slice() Original Array",data2 );
let veg=data2.slice(3,6);                                                                      // //slice() call
console.log(" After slice() Original Array",data2 );
console.log(" After slice() Sub Array",veg );

console.log(" splice() Working......." );                                                      // splice call
console.log(" Before splice() Original Array",data2 );
let veg2=data2.splice(3,3);
console.log(" After splice() Original Array",data2 );
console.log(" After splice() Sub Array",veg2 );



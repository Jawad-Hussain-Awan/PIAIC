
function add(a:number, b:number) : number{                          // Add function
    return a+b;
}

function checkEvenOrOdd(a:number) : string{                        // checkEvenOrOdd function

if(a%2==0){
    return "Even" ;
}
else {
    return "Odd" ;
}
}

function calculateArea (width:number, height:number) : number{       // calculateArea function
   let area = width*height;
       return area;
}

function reverseString(str:string) : string{                        // reverseString function          
let reverseStr = "";
for (let letters of str) {
   reverseStr = letters + reverseStr;
}
    return reverseStr;
    }

function convertCelsiusToFahrenheit(num:number) : number{           // convertCelsiusToFahrenheit function
let conv= (num*9/5) + 32;                                           // formula of conversion applied
return conv;
}    


console.log("Add method : ",add(5,10));
console.log("Even or Odd method : ",checkEvenOrOdd(8));
console.log("calculate Area method : ",calculateArea(3,5));
console.log("Reverse String method : ",reverseString("hello"));
console.log("Celsius To Fahrenheit Conversion method : ",convertCelsiusToFahrenheit(20),"in F");
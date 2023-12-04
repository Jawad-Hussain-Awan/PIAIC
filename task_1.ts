import inquirer from "inquirer"
let answers=await inquirer.prompt([{
name : "user",
type : "string",
message : "Enter grocery or vegetable or fruit",
}]);

// Task 1 Scenaio 1
let user_input=answers.user;
let user_bill=0,user_item, payment_choice;


if(user_input=="Vegetable" || user_input=="vegetable" || user_input=="VEGETABLE"){              // validation of input

    console.log("Welcome to Vegetable Store");

    console.log("Choose the item from the following list :-");
    console.log("Item No  | Item Name \t | Item Price ");
    console.log("1. \t | Potato \t | 100 per kg ");
    console.log("2. \t | Tomato \t | 150 per kg ");
    console.log("3. \t | Onion \t | 200 per kg ");
    
    answers=await inquirer.prompt([{                                                        //choice is inserted
        name : "user_i",
        type : "number",
        message : "Enter your choice"
        }]);
    user_item=answers.user_i;
    
    if(user_item==1 ){
        user_bill+=100;
        }
    else if(user_item==2 ){
        user_bill+=150;
        }
    else if(user_item==3 ){
            user_bill+=200;
            }
    else{
        console.log("You have not chosen any product ");
        }
        

}
else if(user_input=="Fruit" || user_input=="fruit" || user_input=="FRUIT"){

    console.log("Welcome to Fruit Store");

    console.log("Choose the item from the following list :-");
    console.log("Item No  | Item Name \t | Item Price ");
    console.log("1. \t | Apple \t | 110 per kg ");
    console.log("2. \t | Grapes \t | 300 per kg ");
    console.log("3. \t | Banana \t | 160 per Darzan (12) ");
    
    answers=await inquirer.prompt([{
        name : "user_i",
        type : "number",
        message : "Enter your choice"
        }]);
    user_item=answers.user_i;
    
    if(user_item==1 ){
        user_bill+=110;
        }
    else if(user_item==2 ){
        user_bill+=300;
        }
    else if(user_item==3 ){
            user_bill+=160;
            }
    else{
        console.log("You have not chosen any product ");
        }

}

else if(user_input=="Grocery" || user_input=="grocery" || user_input=="GROCERY"){

    console.log("Welcome to Grocery Store");
    console.log("Choose the item from the following list :-");
    console.log("Item No  | Item Name \t \t | Item Price ");
    console.log("1. \t | Shampo \t \t | 450 per Pc ");
    console.log("2. \t | Soap \t \t | 180 per Pc ");
    console.log("3. \t | Tooth Paste (Colgate) | 200 per Pc ");
    
    answers=await inquirer.prompt([{
        name : "user_i",
        type : "number",
        message : "Enter your choice"
        }]);
    user_item=answers.user_i;
    
    if(user_item==1 ){
        user_bill+=450;
        }
    else if(user_item==2 ){
        user_bill+=180;
        }
    else if(user_item==3 ){
            user_bill+=200;
            }
    else{
        console.log("You have not chosen any product ");
        }


}
else{

    console.log("Sorry, we don't have your requested service or item ");

}
                // Task 1 Scenaio 2

    if(user_bill>0 && user_bill<=100){
        console.log("Dear Customer, Your bill is : ", user_bill, "No any discount on Rs. 1 to 100 purchase");
       }

    else if(user_bill>100 && user_bill<=1000){
        console.log("Dear Customer, Your bill is : ", user_bill, "(Recieved 10% discount on Rs. 100 to 1000 purchase)");
        user_bill=user_bill-(user_bill/100*10);
        console.log(" Your bill is : ", user_bill, "after discount of 10% ");
    }
    else if(user_bill>1000 && user_bill<=10000){
        console.log("Dear Customer, Your bill is : ", user_bill, "(Recieved 20% discount on Rs. 1001 to Rs. 10000 purchase)");
        user_bill=user_bill-(user_bill/100*20);
        console.log(" Your bill is : ", user_bill, "after discount of 20% ");
    }
    else if(user_bill>10000 ){
        console.log("Dear Customer, Your bill is : ", user_bill, "(Recieved 30% discount on Rs. 10001 to above purchase)");
        user_bill=user_bill-(user_bill/100*30);
        console.log(" Your bill is : ", user_bill, "after discount of 30% ");
    }
    else {
        console.log("Dear Customer, You have not purchased any product or item");
           }

                        // Task 1 Scenaio 3
    
           console.log("Choose the payment method from following options");
    //console.log("Choose the item from the following options :-");
    console.log("1. \t | Cash on Delievery ");
    console.log("2. \t | Bank Card  ");
    console.log("3. \t | other online payment ");

    answers=await inquirer.prompt([{
        name : "user_b",
        type : "number",
        message : "Enter your choice"
        }]);
    let user_bank=answers.user_b;
                                                        // insert bank choice
    // for(let a=1;a<4;a++){
    if(1==user_bank){
        console.log("Dear Customer, Your bill is : ", user_bill, "Please pay on Arrival of Delievery ");
       }
    else if(2==user_bank){
       
         
       
     //   console.log("Select your Bank");                        // insert bank choice
        for(let b=1;b<4;b++){
            if(b==1){
                console.log("1 for HBL");
            }
            if(b==2){
                console.log("2 for NBP");
            }
            if(b==3){
                console.log("3 for ABL");
            }}
            answers=await inquirer.prompt([{
                name : "user_b_n",
                type : "number",
                message : "Enter your Bank"
                }]);
                answers=await inquirer.prompt([{
                    name : "user_b_ac",
                    type : "number",
                    message : "Enter your A/C No:"
                    }]);
                //console.log(answers.user_b_n); 
       // console.log("Enter your A/C No :");                                              // insert A/C No
        console.log(" Your bill amounting", user_bill," is paid");
    }
    else if(3==user_bank){
        console.log("Select your other online payment method");                        // insert bank choice
        for(let b=1;b<4;b++){
            if(b==1){
                console.log("1 for Jazzcash");
            }
            if(b==2){
                console.log("2 for Easypaisa");
            }
             if(b==3){
                console.log("3 for through CNIC Transfer");
            }
        }
            answers=await inquirer.prompt([{
                name : "user_b_n",
                type : "number",
                message : "Enter your Payment method"
                }]);
                answers=await inquirer.prompt([{
                    name : "user_b_ac",
                    type : "number",
                    message : "Enter your A/C No:"
                    }]);
        // console.log("Enter receipt No :");                                             // insert Receipt No
         console.log(" Your bill amounting", user_bill," is paid");
    
    } 

    console.log(" Thank you so much for your request... Keep visiting us.....");

//}
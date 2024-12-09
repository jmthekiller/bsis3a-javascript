//function to display name
function displayName(name){
    alert("Your name is " + name);
    document.write("<br></br>");
    document.write("Your name is " + name);
    console.log("Your name is " + name);
}

function sumOfTwoNumbers(firstnum, secondnum, dynamicVariable){
    let c = firstnum + secondnum;
    document.getElementById(dynamicVariable).innerHTML = "The sum is: " + c;
    //document.write("The sum of 2 number is: " + c);
} 

function product (firstnum,secondnum,dynamicVariable){
    document.getElementsByClassName(dynamicVariable)[0].innerHTML = "The Product is: " + (firstnum*secondnum);
} 

function inputTwoNumbers(){
    let num1 = parseFloat(prompt("Enter The First Number:"));
    let num2 = parseFloat(prompt("Enter The Second Number:"));
    let sum = num1 + num2;
    alert("The Sum Of Two Number is: " + sum);
} 

function inputAge(){
    var name_name = prompt("Enter your Name: ");    
    let total_item = parseInt(prompt("Enter tohhtal item: "));
    let total_score = parseInt(prompt("Enter total score: ")); 

    let compute = parseFloat((-4 * (total_item/total_score) + 5).toFixed(2));
    var remarks = checkRemarks(compute);
    return "Hello " + name_name + ", your grade is: " + compute + ", and you are " + remarks;
 
   
}

function checkRemarks(grade){
    var remarks = (grade > 3.0) ? "failed" : "passed";
    return remarks;
}
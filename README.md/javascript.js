/*
var num1=10;
num1=num1+10;

console.log(num1);
console.log(num1++);
console.log(num1);
alert('hi');
//Functions
function greet(){
    var name=prompt('what is ur name?');
    var result='hello'+' '+name;
    console.log(result)
}

greet();
*/
//arguments
/*
function sumnum(num2,num3){
    var result1 =num2+num3;
    console.log(result1);
}
sumnum(12,13);//we can add strings jut combine two strings
//while loops
var num=0;
while(num<10){
    num+=1;
    console.log(num);
}
*/
/*
console.log("printing the numbers between 5 and 50 that are divisible by 5 and 3 only");
for(var i=0;i<50;i++){
    if(i%5===0 && i%3===0){
        console.log(i);
    }
}
function greet(p1,p2,p3){
    console.log("hello " + p1+"!");
    console.log("hello"+p2+"!");
    console.log("hello"+p3+"!");
}
greet("byreddy","gnana","dathu");

//this function capitalizes the first char in a string:

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  var city = "paris";              //"paris"
  var capital = capitalize(city);  //"Paris"
  
  //we can capture the returned value in a variable

function iseven(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
} 
function facti(n){
    if(n===0){
        return 1;
    }
    else{
        return facti(n-1)*n;
    }
}
facti(4);
var result=1;
function factorial(numy){
    for(var i=2;i<=numy;i++){
        result=result*i;
    }
    console.log(result);
}
factorial(4);
*/
/*
function kebab(str){
    var newstr=str.replace(/-/g,"_");
    return newstr;
}
*/
var todos=["buy a new car"];
var input=prompt("what would you like to do?");
while(input!="quit")
{
    if(input==="lists"){
      listtodo();
    }
else if(input==="new"){
    newtodo();
}
else if (input==="delete")
{
    deltodo();
}
 input=prompt("what would you like to do?");
}
console.log("ok bye");
function listtodo(){
    console.log("********");
    todos.forEach(function(todo,i){
    console.log(i+": "+todo);
    });
    console.log("**********");
}
function newtodo(){
    var newtodo=prompt("enter new todo");
    todos.push(newtodo);
}
function deltodo(){
    var index=prompt("enter the index that has to be delete");
    todos.splice(index,1);
    console.log("deleted todo");
}
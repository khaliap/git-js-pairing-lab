//Code your solutions in this file
function fiveToOneHundred(){
for (let i= 5; i <= 100; i++){
console.log(i)
}
}
//fiveToOneHundred()

function multipleOfThree(){
    for (let i = 3; i<=100 ; i+=3){
        console.log(i)
    }
}
//multipleOfThree();

function multiplesOfThreeOrFive(){ 
    for (let i =3; i <=100; i++){
    if (i%3 === 0 || i%5 ===0){
        console.log(i)
    }
    }
    
}
//multiplesOfThreeOrFive()

function untilNum(num){
    for (let i = 1; i<=num; i++){
        console.log(i);
    }
}
//untilNum(5);

function multiply(one,two){
return one * two
}
//console.log(multiply(5,6))

function add(num1,num2){
    if (num1 === num2){
        return (num1+num2)*3
    }else{
        return num1 + num2
    }
}
console.log(add(2,3));
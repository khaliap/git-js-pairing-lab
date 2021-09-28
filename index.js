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
//console.log(add(2,3));

function isNegative(num){
    if(num<0){
        return true
    }else{
        return false
    }
        
    }
    //console.log(isNegative(10))
    
function triangleArea(height,base){
    return (height*base)/2
}
console.log(triangleArea(5,7));

function betweenTwentyAndFourty(num){
    if(num>=20 && num<=100){
        return true
    }else{
        return false
    }
}
//console.log(betweenTwentyAndFourty(200))
function largest(num1,num2,num3){
    let array = [num1,num2,num3]
    let largestNum = 0
    for(let i=0; i<array.length;i++){
        if(array[i] > largestNum){
            largestNum = array[i]
        }
    }
    return largestNum
}
console.log(largest(30,22,17));
console.log("first js");
name = "my name is vrushi";
_age = 24;
$price = 24.25
console.log(name);
console.log($price);
console.log(_age);
x = null;
y = undefined
console.log(y);
isFollow123 = true;
console.log(isFollow123);
fullname$ = 'vg';
fullName_g = 'vd';
console.log(fullname$);
console.log(fullName_g);


const student = {//student is a object
    fullName: "dfg", //and fullName is a key and dfg is value
    age: 2,
    cgpa: 8.2
};

// we can change const data if their is a object available        only value can change value 
//we can change let data without or with object


//imp note//
// let chi value update kru shkto
//const chi nhi
//const madhe jr object asel tr tyachya key value update kru shkto


student["age"] = student["age"] + 1;//updates the student age
//or
student.age = 1111; //updates the student age

student.fullName = "vrushi";// updates the name
//or
student["fullName"] = student["fullName"] + 12;//adding value 

console.log(student.cgpa);
//or
console.log(student["cgpa"]);

//assignment1

const product = {
    productName: 'pen',
    rating: 4,
    offer: 5,
    price: 100
};

console.log("assignment1", product);

// assignmrnt 2

const profile = {
    userName: "vrushi",
    isFollow: false,
    follwer: 100,
    post: 143,
    following: 200,
    message: "hi",
    bio: "professionIT"
};
console.log("assignment2", profile);
console.log(typeof profile["userName"]);


//second video
//operators in js

//arithmetic operator(+ , - , * , / , % , **)
let a = 4;
let b = 2;
let c = a + b;

console.log("addition of a+b=", c);
console.log("addition of a+b=", a + b);
console.log("minus of a-b=", a - b);
console.log("multiplication of a*b=", a * b);
console.log("divide of a/b=", a / b);
console.log("a = ", a, "& b =", b);
console.log("module of a%b=", a % b); //it provides remender value
console.log("exponentiation of a**b=", a ** b);    //


//unary operatior:increment and decrement(++ , --)

console.log("post increment a++", a++);// post increment  //op 4    // output generate hot but directly and show hot nhi
console.log("a value after post increement", a);  //op 5   // next time console kelyavr output show hot

console.log("pre increment ++a", ++a); // pre increment  // op 6     // pre incremeny madhe direct output show hot


console.log("post decrement b--", b--);// ppst decrement  //op 2
console.log("a value after post decrement", b);  //op 1

console.log("pre decrement --b", --b); // pre decrement  // op 0
console.log("b value after pre decrement", b); //0


//assignment operator( = , += , -= , *= , %= , **=)

let v = 13;
let d = 5;
let m = 14;
let s = 11;
let g = 9;

v += 2;
console.log("v", v); //output 15

d -= 2;
console.log("d", d);  //output  3

v *= 2;
console.log("v", v); //output 15*2=30

m %= 3;
console.log("m", m);  //output  2

s **= 5;  // 11*11*11*11*11
console.log("s", s);  //output  161051

g /= 3;
console.log("g", g);  //output  3


//camparison operators
/* 
{ provides output in true or false format
1) equal to  ==
2) not equal to !=
3)equal to and also check strictly data type  ===
4)not equal to and check data type !==
>
>=
<
<=
}
*/


// logical operators
/*
{provides output in true or false format
1)logical AND &&  condition 1 and condition 2 same asel tr output true asel otherwise false*/ 
let i = 8;
let h = 6;

let con1 = i > h;
let con2 = i===8;
console.log("condition 1 value", con1);
console.log("condition 2 value", con2);
console.log("condition 1 && con2", con1 && con2);






/* 2)logical OR ||  condition 1 and condition 2 donhi madhe jr ek true asel tr output true asnar
3)logical NOT !    condition jr true sel tr output false asnar it means te exact output la ulat krt
} */


//conditional statements

let age = 25;

if (age > 18) {
    console.log("you can vote", age);
}

let ag = 16;
if (ag > 18);
{
    console.log("yu can't vote", ag);
}

let aged = 20;
if (aged >= 27) {
    console.log("vote done");
}
else {
    console.log("no vote");
}



let mode = "dark";
// let mod= "white"
let color;

if (mode == "dark") {
    color = "black";
    console.log("color", color);
} else {
    color = "red";
    console.log("no color present", color);
}


let num = 14;
if (num % 2 === 0) {
    console.log(num, "is even");
}
else {
    console.log(num, "is odd");
}

let marks = 34;
if (marks >= 75) {
    console.log("distinction");
} else if (marks >= 60) {
    console.log("first class");
} else if (marks >= 50) {
    console.log("second class");
} else if (marks >= 35) {
    console.log("third class");
} else {
    console.log("fail");
}

//ternary operator   ?

let dage = 25;
let result = dage > 26 ? "adult" : "not adult";
console.log(result);

let ab = 18;
ab > 17 ? console.log("adult") : console.log("not adult");


//switch statement

let abcd = 'apple';

switch (abcd) {
    case "watermelon":
        console.log("watermelon is present");
        break;
    case 'apple':
        console.log("apple is present");
        break;
    default:
        console.log('no one');


}

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}


// assignment 1 vid 2

// alert("hey vrushi");
// let number = prompt("enter a number");
// console.log("actual number",number);
// if(number % 5 === 0){
//     console.log("divide by ",number);
// }else
// {
//     console.log("number is not divided by ",number);
// }


//assignment 2 vid 2

// give grades to students according to their marks
/*
90 to 100 A grade
80 to 89  B grade
70 to 79 C grade
60 to 69 D grade
else 59 fail
*/


/*let mark = prompt("enter your marks");*/
//or
// let mark=78;

/*let grade;

if (mark >= 90 && mark <= 100) {
    grade = "A";
    console.log("grade A");
} else if (mark >= 80 && mark <= 89) {
    grade = "B";
    console.log("grade B");
} else if (mark >= 70 && mark <= 79) {
    grade = "C";
    console.log("grade C");
} else if (mark >= 60 && mark <= 69) {
    grade = "D";
    console.log("grade D");
} else if (mark >= 0 && mark <= 59) {
    grade = "fail";
    console.log("student failed");
}*/

//for of loop
 //str chi value i madhe sore krun print krt
let str="vrushi";
for(let i of str){
    console.log("i value=",i);  //i=v i=r i=u i=s i=h i = i  
}

//string chi size check krnar
let ing="vrushi";
let size=0;
for(let i of ing){
    console.log("i value=",i);   //i=v i=r i=u i=s i=h i = i
    size++;
    
}
console.log("size",size);//6


//for in loop

let stu={
    name:"vrushi",
    address:"nanded phata",
    age:25,
    cgpa:8.2,
    surname:"ghule"
}
for(let valueofvariable in stu){
    console.log("student key=",valueofvariable);//name address age cgpa surname
    console.log("student key values=",stu[valueofvariable]); // vrushi nanded phata 25 8.2 ghule
}

//practice set 1

//print even numbers
for(let nump=0;nump<=100;nump++){
    if(nump%2===0)
    console.log("even numbers",nump);//246810....
}

//print odd numbers

for(let numps=0;numps<=100;numps++){
    if(numps%2 !==0)
    console.log("odd numbers",numps); //13579....
}

//practice set 2

let gamenum=13;
let pro = prompt("enter num");
while(pro != gamenum){
    pro=prompt("try again");

}
console.log("congratulations");


//strings in JS 

let len="vrushi";
console.log("length of a string ",len[0]); // v


//template literals
// template literals is a special type of string
let prod ={
    name:"pen",
    price:10,
}
console.log("long way to see the value of object name",prod.name,"long way to see the value of price",prod.price);
// 2 differences
//1) vrti jo console ahe 388 line vr to long way zala and 393 line vr short way ahe 
// 2) jewa console vr donhi console ch output check kel tewa pen price 10 hoti an 
// tye price cha printing color blue(line no 388) and white(line no 393) hota 

//using template literal (easy way)
let outputtemplate=`name of a prod ${prod.name} price of prod ${prod.price} in ruppes `;
console.log("template literal output = ",outputtemplate);


//string interpolation

// escape characters
//     \n  = next line  and     \t =tab (space between 2 strings)

console.log("vrushali \nghule");  //\n  = next line 
console.log("escape charaters \t example");   //  \t =tab (space between 2 strings)

let escape="characters";
console.log("check length=",escape.length);  //10

let escapechar="chara\ncters";    // hyamadhe \n add kelay but tyani slash(\)hyala \n sobt count kelay different nhi
console.log("check length=",escapechar.length);//11

let escapecharacter="chara\tcters"; // hyamadhe \t add kelay but tyani slash(\)hyala \t sobt count kelay different nhi
console.log("check length=",escapecharacter.length);//11


//string methods in js
//1)    toUpperCase()
//2)    toLowerCase
//3)    trim() ==========starting and ending spaces cut krt trim method
//4)    slice(start,end?)  //returns part of string
//5)    concat(str2)   //joins str2 with str1
//6)    replace(searchVal,newVal)
//7)    charAt(idx)    //index deycha mg tya index vr konta characters ahe te show hot

// in JS strings are immutable (can't change the exact string)aste
//how can we change the string lower to upper or upper to lower

//1)
let upper="CaseApna";
upper=upper.toUpperCase();
console.log("normal=",upper);
//or
let abc=upper.toUpperCase();
console.log("uppercase example=",abc);

//2)
let lower="TonyLOWercAsE";
lower=lower.toLowerCase();
console.log("normal lower example=",lower);
//or 
let abcde=upper.toLowerCase();
console.log("lowercase example=",abcde);

//3)
let tree="       dfghj            dfg 45678          456789ijhbv            ";
// let tr=tree.trim();or option
console.log("trim method=",tree.trim());

//4)
let ac="friends";
console.log("slice example=",ac.slice(1,4));//rie

//5) 
let acd="friendsforever";
console.log("concat example=",acd.concat(" next word"));//friendsforever next word
//or
let str1="vrushi";
let str2="ghule";

// let con=str2.concat(str1);
// let con=str1+str2;
 let con="i am "+ str1 + str2;
console.log("second concat=",con);


//6)
let ace="friendsforever";
console.log("replace example=",ace.replace("ends","sends"));//friendsforever next word
//if we use replace() function then it will be replace that first character if the character repeats it will not replce with this function
//replaceAll() is a function that replace all same characters which are available in the string

//7)charAt()

let asd="vrushi";
// asd=asd.charAt(1);
// console.log("charat example=",asd);
//or 
console.log("example of charat=",asd.charAt(0));




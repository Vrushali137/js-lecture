function fun1(){
    console.log("run fun1");
    console.log("run fun2");
}

fun1();

function fun2(mes){// parameter -->input
    console.log(mes);
}

fun2("i love js"); //argument
//output   type fun2 then enter

function sum(x,y){
    s=x+y;
    return s;  // at one time we can return only one thing ==(string ,number)
    // return statement nantr code madhe khi pn code write kela tr to execute hot nhi

    // console.log(s);
    //or 
    // console.log(x+y);
}//outut type sum then enter

let ret=sum(4,5);
console.log(ret);
//outut type ret then enter

//ARROW FUNCTION 
//it's a modern js
//parameters pass krayche means input

let fun3=(q,w)=>{
    f=q+w;
    console.log(f);
}
//outut type fun3 then enter

//practice question 1
//count vowels from string

function countvowels(str){
    let count = 0;
    for (let char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        )
    {
            count++;
            console.log("done=",char);

        }
    }
    console.log("done=",count);

}
//outut type countvowels("vrushi") then enter
//output 2

//do that task again using arrow function

let arrow = (arrofun)=>{
   let count=0;
    for(let arfu of arrofun){
        if(
            arfu==="a" ||
            arfu === "e" ||
            arfu === "i" ||
            arfu === "o" ||
            arfu === "u"
        )
        {
            count++;

        }
    }
    console.log(count);
}
//outut type countvowels("vrushi") then enter
//output 2

//FOR EACH LOOP IN ARRAYS
//for each loop use krun aapn array madhe je value ahet tyavr different operations perform kru shkto
//foreach use for function callback
//foreach only use for array not for strings(it gives error)
//foreach also called as (higher order function) or (higher order method)
let arr=[1,2,3,4,5];
arr.forEach((val) => {
    console.log(val);
});

//opration perform==uppercase
//ekhadya function madhe dusar function use krt asel tr tyala higher order function mahntat 
// coz aapn tya function madhe another function use krt asto
// for each madhe touppercase use krtoy mhnun he higher order function ahe
//foreach funtion madhe another function work hoty tyyat callback hot ahe
let ar=["aai","mai","sai","tai"];
ar.forEach((fam)=>{
    console.log(fam.toUpperCase(),ar);
});

//In foreach we can use 3 parameters at one time or when we needed

let arrayname=["as","az","aq","ae"];
arrayname.forEach((vaw,index,arrayname)=>{// 3 parameters sharing
    console.log(vaw,index,arrayname);
});

//for the given array print there square

let sq=[2,3,4,5,6];
sq.forEach((num)=>{
    console.log(num*num);
    //or
   // console.log(num**2);
});

//another type of answer

let mul=[24,35,65];
let calsquare=(num)=>{
    console.log(num*num);
};

mul.forEach(calsquare);//pass here function name and array


//MAP MOTHOD
//using map ==array chya values use krun new array create kru shkto 
// foreach== operations calculations perform kru shkto

//printing numbers
let mp=[10,20,30];
mp.map((val)=>{
    console.log("printing numbers=",val);
});

//doing operation and showing in new array

let no=[11,22,33,44,55];
let newarray=no.map((value)=>{
return value*value;
}
);
console.log("newarray using map method=",newarray);

//FILTER METHOD
//creates a new array of element that give true for  a condition/filter.
//filter houn new array create hoto only true values cha false cha nhi

//even no
let ev=[1,2,3,4,5,6,7,8,9];
let even=ev.filter((val)=>{
    return val % 2 ===0;
});
console.log("even nums using filter array",even);

//odd no
let od=[1,2,3,4,5,6,7,8,9];
let odd=od.filter((val)=>{
    return val %2!==0;
});
console.log("odd nums using filter array=",odd);

//lager num than value
let large=[11,22,33,44,55,66];
let largenum=large.filter((val)=>{
    return val>33;
});
console.log("large num than value=",largenum);

//reduce method
// perform some operations and reduce the array to a single value.
// it returns that single value.

//sum example

let red=[1,3,2,4,5];
const redu=red.reduce((result,currentno)=>{
    return result+currentno;
});
console.log("reduce method sum example=",redu);//output 15

//greater num from array
let great=[1,52,69,87,42,32,15];
const greater=great.reduce((big,small)=>{
    return big>small ? big:small;
    // big num asel tr big print hoil 
});
console.log("greater num from array=",greater);//87

//practice question 1
//we are given array of marks of students.Filter out of the marks of the students that scroed 90+

let marks=[58,54,96,95,72,99,90];
const student=marks.filter((val)=>{
    return val>90;
});
console.log("practice q1 greater marks=",student);

//practice question 2
//1)take a number n as  input from user.create an array of numbers from 1 to n.
// 2)use the reduce method to calculate sum of all numbers in the array.
//3)use the reduce method to calculate product of all numbers in the array.

//1)
let prom=prompt("enter num:");
let empty=[];
for(let i=1;i<=prom;i++){
    empty[i-1]=i;
};
console.log(empty);

//2)
const calculat=empty.reduce((prev,next)=>{
    return prev+next;
});
console.log("calculate sum of all numbers=",calculat);

//3)
const factorial=empty.reduce((prev,next)=>{
    return prev*next;
});
console.log("multi all n nums=",factorial);
//factorial means if you give number 4 then the output calculate like this 1*2*3*4  actual output=24npm install -g @angular/cli

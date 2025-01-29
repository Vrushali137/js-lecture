let array=[10,20,30];
console.log(array);


//print this array ?  ->printed the array using for loop
let chars=["aai","vrushi","mai","sonali"];
for(let index=0; index<chars.length;index++)
    console.log(chars[index]);
    
// using for of loop 
for(let loop of chars){
    console.log(loop);
}

// using for of loop and uppercase
for(let loop of chars){
    console.log(loop.toUpperCase());
}

//practice question=sum kadhun average kadaych

let marks=[11,22,33,44,55];
sum=0;
for(let stu of marks){
    sum=sum+stu;
}console.log("sum of marks=",sum);

let avg=sum/marks.length;
console.log(`averge marks of students= ${avg}`);


//practice q 2 =10% offer lavun amount print karaych
let price=[10,20,30,40,50];

for(let val=0;val<price.length;val++){
    let offer=price[val]/10;
    let av=price[val]-offer;
    console.log(av); 
}

//ARRAYS IN JS
//1)Push()=add to end
//2)Pop()=delete from end and return
//3)toString()=converts array to string
//4)concat()=join multiple arrays and return result
//5)unshift()=add at first place  {its like push}
//6)shift()=delete first           {its like pop}
//7)slice()=returns the piece of the array          
// slice(startindex,endindex)   =  slice ni array divide hoto startindex count hoto but endindex count hot nhi 
// and jr endindex dila nhi tr startindex pasun pudcha sagla array count hoto new array madhe
//8)splice() = change original array
//working for (add,remove,replace)
//splice(startindex,deletecount,newelement1....)
// 8.1)splice madhe array cha starting index deycha mg kiti numbers delete kraychet to count deycha then je delete kely tyanna 
// replace kraycha asel dusarya number ni tr te number enter karayche (2,3,101,102,103)
// 8.2)delete nasel kraych khi tr count 0 deycha 



//1)

let fruits=["apple","cherry","stawberry","papaya"];
console.log(fruits);

fruits.push("sdfg","fgh")
console.log("push example=",fruits);

//2)

let home=["fridge","ac","cooler","fan"];
deleted_home=home.pop();
console.log("deleted home=",deleted_home);
console.log("pop example=",home);

//3)

let str=["fgh","fgh","fghj","fgh"];
console.log("tostring characters example",str.toString());
let nums=[85,85,74,96,74,96];
console.log("tostring number example",nums.toString());
//original string madhe khi change hot nhi

//4)
let con1=["ab","cd","ef","gh"];
let con2=["ij","kl","mn"];
let con3=["op","qr","st"];
let cons=con1.concat(con2,con3)
//or
// let cons=con1+con2+con3;
console.log("concat of array=",cons);

//5)

let un=["sedf","fds","fhgf","uyt"];
un.unshift("firstunshift");//adding this character at first place
console.log("unshift example",un);

//6)

let shif=["second","third","fourth"];
shif.shift();//shift method removes first character in shif array
console.log("example of shift method",shif);
//or
// let deletedchar=shif.shift();
// console.log("example of shift method",deletedchar);

//7)

let sli=["sl1","sl2","sl3","sl4","sl5"];
console.log("slice example",sli.slice(1,3));// endindex count krt nhi // output sl2,sl3
console.log("slice start index example",sli.slice(1));// if endindex not mentioned then the output will be continues from starting index
console.log("slice blank index example",sli.slice()); // shows whole array

//8)

let spli=[1,2,3,4,5,6,7,8,9];
//(startingindex,deletecount,replacenumbers)
spli.splice(1,2,101,102);
console.log("splice example=", spli);//output  [1, 101, 102, 4, 5, 6, 7, 8, 9]

//add numbers
let spliadd=[11,22,33,44,55,66,77,88,99];
//(startingindex,deletecount,replacenumbers)
spliadd.splice(3,0,101,102);//add from 3rd index ,no delete
console.log("splice only add example=", spliadd);//output  [11, 22, 33, 101, 102, 44, 55, 66, 77, 88, 99]

//replace numbers
let splireplace=[11,22,33,44,55,66,77,88,99];
//(startingindex,deletecount,replacenumbers)
splireplace.splice(0,0,101,102);
console.log("splice only replace example=", splireplace);//output  [101, 102, 11, 22, 33, 44, 55, 66, 77, 88, 99]

//delete numbers
let splidel=[111,222,333,444,555,666];
splidel.splice(2,2);  //(startingindex,deletecount)
console.log("splice for only delete example=",splidel);// output [111, 222, 555, 666]

 //practise question 

 //1)delete first element
 let prac=["bloomberg","microsoft","uber","google","ibm","netflix"];
//  prac.splice(0,1)
 //or
 prac.shift();
 console.log("practice question 1",prac);
 
//2)remove uber and add ola
let pract=["bloomberg","microsoft","uber","google","ibm","netflix"];
pract.splice(2,1,"ola");
console.log("practice question 2=",pract);

//add amazon at the end
let practi=["bloomberg","microsoft","uber","google","ibm","netflix"];
practi.push("amazon");
console.log("practice question 3=",practi);

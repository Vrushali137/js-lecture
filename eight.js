let btn = document.querySelector("#mybtn");

btn.onclick = () => {
    console.log("code overwrite 1");
    let a = 25;
    a++;
    console.log(a);
}
// let btn1=document.querySelector("#mybtn"); already vr declare kel ahe mhnun rewrite nhi kel
btn.onclick = () => {
    console.log("code overwrite 2");
}
// 2 same function jr lihily tr code overwrite hoto an je last time code l Line num 1 to 8 
// Aapla first code ahe and 10 to 12 to ch code aapn return write kelay tr tya madhe 
// Aapla jo aapn last time code lihilay to print honar (line num 10 to 12 wala)

// But he kadhi hot jewa same event aapn lihito tewach
// Onclich ha event double lihilay mhnun to code overwrite zalay



let div = document.querySelector("#mybox");
div.onmouseover = () => {
    console.log("you are inside div");
};

let next = document.querySelector("#eventobjectexample");
next.onclick = (evt) => {     // we can type anything in that parenthesis because its a variable 
    //but most probably we type e,evt,event
    console.log("object events1 whole info", evt);
    console.log("event type", evt.type);
    console.log("event target", evt.target);
    console.log("event positions X axix", evt.clientX);
    console.log("event positions Y axix", evt.clientY);
}

//event listner example 
let el = document.querySelector("#evtlist");
el.addEventListener("click", () => {
    console.log("event listener 1");
});

el.addEventListener("click", () => {
    console.log(" event listener 2 single click");
});

const listner3 = () => {
    console.log(" event listener 3 single click");
}
el.addEventListener("click", listner3);
// jr aaplya la ekhada eventremove kraycha asel tr phil tyala variable madhe store kraycha 
// mg te as a function use kraych an then remove listener madhe use kraych
// the call back reference should be same to remove event  for ex:-call back reference(listner3)

el.addEventListener("click", () => {
    console.log(" event listener 4 single click");
});

el.removeEventListener("click", listner3); // remove any event listner


//darkmode and lightmode
let dl = document.querySelector("#modes");
let mod = "light";
let body = document.querySelector("body");

dl.addEventListener("click", () => {
    if (mod === "light") {  //if bgcolor id light
        mod = "dark";  //convert into dark
        body.classList.add("dark");  // add dark color
        body.classList.remove("light");   //remove light color
    } else {
        mod = "light";   //else light color present 
        body.classList.add("light");  //add light color
        body.classList.remove("dark");  //remove dark color
    }
    console.log(mod);
});


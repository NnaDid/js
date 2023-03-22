let welEl = document.querySelector(".welcome");
welEl.innerHTML ="Welcome Mr. Christian";

// DATA TYPES
// 1. String : "Hello i am 12 today"  or 'Jelo bla blue'
// 2. Number : 
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object
var x = 0;
let xx = 10;
const xxx = 100;

//STRINGs in JS
let name = "Mr. Christian";

console.log(name); 
console.log(typeof name);
console.log(name[4]);

let myNum = "50";
let num = 50;

console.log(myNum);
console.log(num);
console.log(num == myNum);
console.log(num === myNum);

// convert String to Number
let conMynum   = Number(myNum),
    second_num = parseInt(myNum);

console.log(conMynum);
console.log(typeof conMynum);
console.log(second_num);
console.log(typeof second_num);

// concetenation
let  man = "Adam ";
let woman = "Eve";
let manoman ;
let wow   = {};

let joineMan = man + woman;
console.log(joineMan.toUpperCase());
console.log(joineMan.toLowerCase()); 

console.log(manoman); 
console.log(typeof manoman); 
console.log(wow); 
console.log(typeof wow); 


class Code{
    
    constructor(){
        console.log("constructor")
    }
}

let cod = new Code();
console.log(cod);
console.log(typeof cod);



// Logincal Operator
// |  = OR
// &  = AND
//101
let c = false;
let d = true;
let w = 50;

if(c == true || d == true || w >30){
    console.log("Yehhhhh");
}


// DATA STRUCTURE
// Array 
// Objcts
// Map
// Sets

// Array 

let vegetables = [45, "Henry Mouan", [true, 45,0],{name:"Nameey"}];
let fruits  = new Array();
let otherFruit = ["Berry","Water Melon","Pawpaw","Cherry"];

console.log(vegetables);


fruits.push("pineapple");
fruits.push("Avocado");
fruits.unshift("Apple");
fruits.unshift("Orange");
fruits.unshift("Mango");
fruits.unshift("Dragon Fruit");
console.log(fruits);
fruits[45] ="Helo Fruit";


console.log(fruits[1]= "Biscuit");

console.log(fruits);


let combinedFruit = fruits.concat(otherFruit);

console.log(combinedFruit);

// p[rint out all items of the combine fruits that are not *OtherFruit*

combinedFruit.forEach((item,index)=>{

    if(!otherFruit.includes(item)){
       console.log(item);
    }

});


combinedFruit.forEach((item,i)=>{

    if(otherFruit.indexOf(item) == -1){
        console.log(item);
    }
});



let neNum = [11,23,54,6,7,8,9,90,123,43,5];
console.log(neNum);
let part1 = neNum.slice(4);
let part2 = neNum.slice(-5);
let copy = [...part2];

console.log(part1);
console.log(part2);
console.log(copy);

// using the splice method

let part3 = neNum.splice(-3,3);
console.log(part3);
console.log(neNum);

let first_3Removed = neNum.splice(0,3,0,3,4);
console.log(first_3Removed);
console.log(neNum);


let greater_5 = neNum.filter((item) => item >= 5);
let greater_55 = neNum.filter((item) => {
   return  item >= 5;
});
console.log(greater_5);
console.log(greater_55);

greater_55.forEach(item => console.log(item));



let filtered_other = otherFruit.filter(item => item != "Berry");
console.log(filtered_other);


let someMethod = neNum.some((item)=> item >=5);
console.log(someMethod);


// Object

let myObj = {
                "name":"Mr. Christian",
                "worth":500000000,
                "age":170 ,
                "course":["Js","PHP","ReactNative","R","Python","Scratch"],
                "stateVisited":{
                    "southeast":["Ebonyi","Anambra","Imo","Enugu"],
                    "nortast":["Katsina","Borno"],
                    "southWest":["ondo","Ogun","Lagos"]
                }
           };

// reading from the object
let my_name  = myObj.name;
let my_name2 = myObj["name"];

console.log(my_name);
console.log(my_name2);

// Writing to the object

myObj.aircraft = 7;
myObj["countries"] =["Nigeria","Togo","Niger"];
console.log(myObj);



let keys = Object.keys(myObj);
console.log(keys);


// FUNCTION 

function sayIt(str){
    console.log(str);
}

let myFunc = function(){
    //statements
    return 1;
};

// Arrow function
const my_Func = ()=>{
    //statements
}


sayIt("Hello I have just redefined my console.log bc I am tired of long typing");


// IIFE == Immediately Invoked  Function Expression
// difference betwwen window.load and window.addEventListener("DocumentLoaded",);

// DOM
const usd = document.getElementById("usd");  // dollar input element
const ngn = document.querySelector(".ngn");  // Naira input element

// submit button
const convert_button  = document.querySelector(".convert-button");
// form 
const form_convereter  = document.querySelector(".form_convereter");
const conv_btn         = document.querySelector(".conv_btn");

usd.addEventListener("keyup",()=>{ 
    const conversion_rate = 745.45;
    const usd_value    = usd.value;  // READING FROM THE INPUT ELEMENT
    if(usd_value >=10){
        // eneable the button
        // conv_btn.removeAttribute('hidden');  
        conv_btn.style.display = 'block';  
        conv_btn.classList.add("action_button")

        conv_btn.addEventListener("click",()=>{ 
                let conveterted_amount = Number((conversion_rate * usd_value));
                ngn.value = conveterted_amount;
        });

    }else{
        // Disable the Button
        conv_btn.style.display = 'none';  
        // conv_btn.setAttribute('hidden',true);
        conv_btn.classList.remove("action_button");
        ngn.value = "";
    }

});

// form_convereter.submit = function(event) {

// }

// form_convereter.addEventListener("submit", (event)=> {
//     event.preventDefault();
//     const conversion_rate = 745.45;
//     const usd_value    = usd.value;  // READING FROM THE INPUT ELEMENT
//     let conveterted_amount = Number((conversion_rate * usd_value));
//     ngn.value = conveterted_amount;
// });





























































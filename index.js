//Remove duplicate//multipol items from an array

 function removeDuplicate(names){
    const unique =[];
    for (let i = 0; i < names.length; i++) {
        const name = names[i]
        if(unique.includes(name) === false){
            unique.push(name);
        }
        
    }
    return unique;

}
const names =["Dean", "Harley", "Jake", "Harley", "Kane", "Dean", "Jake", "Jenson", "Luke", "Harley" ];
//console.log(removeDulicate(names[i]));
const uniqueName = removeDuplicate(names);
//console.log(uniqueName); 
//ends

/* 
    show the number 1-50
    if the number 3 দিয়ে ভাগ যায় তাহলে ৩ এর পরিবর্তে শো করবে "foo"
    if the number 5 দিয়ে ভাগ যায় তাহলে 5 এর পরিবর্তে শো করবে "bar"
    if the number 3 এবং ৫ দিয়ে ভাগ যায় তাহলে ৩ এবং ৫ এর পরিবর্তে শো করবে "foobar"
 */

function foobar(){
    for(let i = 1; i <= 50; i++){
        
        if(i % 3 === 0 && i % 5 === 0){
            console.log("foobar")
           }
        else if(i % 3 === 0){
            console.log("foo")
        }
        
        else if(i % 5 === 0){
            console.log("bar")
        }

        else{
            console.log(i)
        }
    }
}

//foobar()
//ends

function calculation(chairQuantity, tableQuantity, badQuantity){
    const perChairWood = 2;
    const perTableWood = 4;
    const perBedWood = 10;

    const totalChairWood = chairQuantity * perChairWood;
    const totalTablerWood = tableQuantity * perTableWood;
    const totalBedWood = badQuantity * perBedWood;

    const totalWood = totalChairWood + totalTablerWood + totalBedWood;

    return totalWood;

}

const totalWood = calculation(3, 2, 5);
console.log(totalWood);
//ends

//Find the low price phone from an array of phone objects
const phones = [
    {name: "samsung", camera: 12, storage: "32gb", price: 36000, color: "black"},
    {name: "walton", camera: 10, storage: "32gb", price: 22000, color: "black"},
    {name: "iphone", camera: 7, storage: "32gb", price: 82000, color: "black"},
    {name: "xaomi", camera: 17, storage: "32gb", price: 36000, color: "black"},
    {name: "samsung", camera: 25, storage: "32gb", price: 36000, color: "black"},
    {name: "nokia", camera: 6, storage: "32gb", price: 11000, color: "black"},
    {name: "vivo", camera: 10, storage: "32gb", price: 62000, color: "black"}
    
];

function lowPricePhone(phones){
    let lowPrice = phones[0];

    for(let i = 0; i  <phones.length; i++){
        const phone = phones[i]
        if(phone.price < lowPrice.price){
            lowPrice = phone;
        }
    }
    return lowPrice;
}

const selectPhone = lowPricePhone(phones)
console.log(selectPhone);
//ends

//Find the high maga px camera phone from an array of phone objects

 function findHighCamera(phones){
    let highMagaCemera = phones[0]

    for( let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.camera > highMagaCemera.camera){
            highMagaCemera = phone;
        }
    }
    return highMagaCemera;
}

const selectCamera = findHighCamera(phones);
console.log(selectCamera);
//ends
 
// Calculate the total cost of the products in a shopping cart

const shoppingCart = [
    {item: "shart", price: 1200},
    {item: "pant", price: 1700},
    {item: "belt", price: 600},
    {item: "shoes", price: 2000},
];

function totalCost(shoppingCart){
    
    let sum = 0
    
    for( let i = 0; i < shoppingCart.length; i++){
        sum = sum + shoppingCart[i].price
    }
    return sum

}

const expence = totalCost(shoppingCart);
//console.log(expence);
//ends

// Calculate the total cost with quantity of the products in a shopping cart

const products = [
    {item: "shart", price: 1200, quantity: 2},
    {item: "pant", price: 1500, quantity: 4},
    {item: "belt", price: 600, quantity: 2},
    {item: "shoes", price: 1700, quantity: 5},
];

function expences(products){

    let sum = 0
    for(let i = 0; i < products.length; i++){
        const totalCost = products[i].price * products[i].quantity;
        sum = sum + totalCost;
    }
    return sum;
}

const result = expences(products);
//console.log(result);
//ends

/* 
    if purchese less than 100, per ticket price: 100
    if purches more than 100 but less than 100, 
        first -------> 100tk
        101 - 200 -------> 90tk
    if purchese more than 200
        first -------> 100tk
        101 - 200 --------->90tk
        200+ -----------> 70tk
 */


function  totalTricketPrice(purchesTricket){
    const first100Rate = 100;
    const second200Rate = 90;
    const restTricketRate = 70;

    if(purchesTricket <= 100){
        const totalPrice = purchesTricket * 100;
        return totalPrice;
    }

    else if(purchesTricket <= 200){
        const first100TricketPrice = 100 * first100Rate;
        const second100TricketPrice = (purchesTricket - 100) * second200Rate;
        const totalPrice = first100TricketPrice + second100TricketPrice;
        return totalPrice;
    }

    else{
        const first100TricketPrice = 100 * first100Rate;
        const second100TricketPrice = 100 * second200Rate;
        const restTricketPrice = (purchesTricket - 200) * restTricketRate;
        const totalPrice = first100TricketPrice + second100TricketPrice + restTricketPrice;
        return totalPrice;
    }
} 

const totalTricketAmount = totalTricketPrice(80);
console.log(totalTricketAmount);

const totalTricketAmount2 = totalTricketPrice(120);
console.log(totalTricketAmount2);

const totalTricketAmount3 = totalTricketPrice(250);
console.log(totalTricketAmount3);
//ends

/* 
     একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। 
 */

function getarea(length, width, height){
    const result = length * width * height;
    return result;
}

const output = getarea(3, 5, 4);
document.write("Total area is : " + output);
//ends







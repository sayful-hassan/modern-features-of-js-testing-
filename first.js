//template literal
let friend='anaz'
console.log(`hey man,${friend} how is the wheather in dubai`) 

//destructoring
let friends={rahil:"kind", moinu:"friendly", aswin:"care", anaz:"loyal"};
let {rahil, moinu, anaz, aswin}=friends

console.log('rahil');


//spread operator
let sayfmind=["creative","knowledge","criticalthinker"]
let sayfheart=["kind","loyal","love","pain"]
let thecompletesayf =[...sayfheart,...sayfmind]

console.log("who is sayf in multiple words"+ (thecompletesayf))

//rest operator
function addAll(...numbers) {
    let sum=0;
    for (let num of numbers){
        sum += num;
    }            
    return sum;
}
console.log(addAll(5, 3, 5));
console.log(addAll(4, 5, 5, 2))
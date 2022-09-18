// // variable var ,let ,const
// //name="kunal";
// //console.log(name)

// //operators
// //fruit =  prompt('fruit name')
// //console.log(fruit)
// //* /** + -
// // food=Number(prompt('How much was the food ?'))
// // tip=Number(prompt('Tip percentage'))/100
// // tipAmount= food *tip
// // total= food +tipAmount

// // console.log(`Tip Amount is : ${tipAmount}`)
// // console.log(`total Amount is : ${total}`)
// // alert(tipAmount)
// // Data Type(Nummber and strings)/*

// /*
// number 1,2,2,3,1,3;
// String 'kunal' "darne" 
// Array = []
// Object ={}
// Bollen = true/False*/


// /*Maths Stuff
//  Maths Operators
//  multiply *
//  divide /
//  Exponent **
//  modulle % 5%2  */

// /*Maths Method
// Math.floor= Round Down
// Math.ceil()=Round Up
// Math.Random()=Random Number*/

// //baby wwather app (Conditional)
// //if rain "grab your umbrella"
// //else "Wear Your SunGlasses"
// /*let weather=prompt(`How is the weather:)`)
// if(weather =='rainy'){
//   console.log("grab your umbrella");
// }else{
//   console.log("Wear Your SunGlasses")
// }*/
// //conditional operators
// // ==, ===,>,<,<=,>=,!=,!==


// //function

// function sayMyName(name) {
//   console.log(name)
// }

// //sayMyName("KUNAL DARNE NAMASTE BRO")

// function greeting(name) {
//   console.log(`hi ${name} ,Nice To Meet You!`)
// }
// //greeting("Kunal Darne")


// function sum(a, b) {
//   return a + b
// }
// // Answer=sum(10,20);
// // console.log(Answer)
// // function calculateFoodTotal(food,tip){
// // tipPEr=tip/100
// // tipAmount= food *tipPEr
// // total= sum(food,tipAmount)
// //   return total
// // }
// // console.log(calculateFoodTotal(300,20))

// // console.log(`Tip Amount is : ${tipAmount}`)
// // console.log(`total Amount is : ${total}`)

// // // Es6
// // //Arrow Function
// // const sumAroow=(a,b) => a*b
// // console.log(sumAroow(10,23))

// //Arrays
// const groceries = ['bannana ', 'apple', 'grapes', 'mangoo'];
// //grap the 2nd index
// //console.log(groceries[2])
// //Array Method
// groceries.push("Blue Berry")
// //console.log(groceries)
// //start from 0 inclusive and up to 2 Exclusive
// //console.log(groceries.slice(1,4))
// // Array Method (slice, push,indexOf,lenght)
// //console.log(groceries.length)

// //objects
// // const person={
// //   name:"Leonardo",
// //   shirt:"White",
// // }
// // //Access the object
// // console.log(person.name)
// // console.log(person['shirt'])


// // //Assign object
// // // person.phone=7410152425;
// // // console.table(person)

// // //person 2
// // // const person2={
// // //   name:"kunal",
// // //   Tshirt:"Green",

// // // }

// // // const introduce=(name,Tshirt) =>{
// // //   const person={
// // //     name:name,
// // //     Tshirt:Tshirt,
// // //   assets:100000,
// // //     liability:50000,
// // //   netWorth:function(){
// // //     return this.assets -this.liability
// // //   }
// // //   }
// // //   return `Hi! My ${name} and my Tshirt color is ${Tshirt} and my net Worth is ${person.netWorth()} USD`
// // // }
// // // console.log(introduce("Kunal","YEllow"))
// // // console.log(introduce("Leonardo","white"))

// // //const Fruits=['banana','Apple','Mangoo','Grapes','Chicku','Pineapple']
// // // console.log(Fruit[0])
// // // for(let i=0; i<Fruit.length;i++){
// // //   console.log(i,Fruit[i])
// // // }
// // // for (const Fruit of Fruits){
// // //   console.log(Fruits)
// // // }

// // const number = [1, 2, 3, 4, 5, 6]
// // //Sum of all nuumber in Array
// // // const letterCounter = () => {

// // //   let result = 0
// //   for (letter in phrase) {
// //     console.log(Number(letter) + 1)
// //     result = Number(letter) + 1

// //   }
// //   return { result }
// // }
// // // const phrase =prompt("Write your phrase")
// // //      console.log( letterCounter())
// // const SumArray = (numbers) => {
// //   let result = 0
// //   for (const number of numbers) {
// //     console.log(number)
// //     result = result + number;
// //   }

// //   return { result }
// // }
// // const nums = [1, 2, 3, 4, 5]
// //console.log(SumArray(nums))
// // double number


// // const max = (numbers) => {
// //   let result = numbers[0];
// //   for (const number of numbers) {
// //     if (number > result) {
// //       result = number
// //     }

// //   }


// //   return { result };
// // }

// //console.log(max([1,2,3,4,5]))


// // const letterFrequency = (phrase) => {
// //   //(haha) h=2 a=2
// //   console.log(phrase)
// //   //freq object
// //   let frequency = {}
// //   for (const letter of phrase) {
// //     if (letter in frequency) {
// //       frequency[letter]++
// //     } else {
// //       frequency[letter] = 1
// //     }
// //   }
// //   return frequency
// // }
// //console.log(letterFrequency('lol i got it Write Thank You'))

// // const wordFrequency = (phrase) => {
// //   let frequency = {}
// //   const words = phrase.split(' ')
// //   for (const word of words) {
// //     console.log(word)
// //     if (word in frequency) {
// //       frequency[word]++
// //     } else {
// //       frequency[word] = 1
// //     }

// //   }
// //   return frequency
// // }
// //const userInput=prompt('Write Your Sentence')
// //console.log(wordFrequency(userInput))
// // incremental operator
// // ++,-- ,+= 

// //higher order fuction
// //map 
// //filter
// //reduce
// // let result = [1, 2, 3, 4].map(number => number % 2 == 0)
// // console.log(result)

// // const doubleMap = (numbers) => {
// //   return numbers.map(number => number * 3)
// // }
// // console.log(doubleMap([3., 6, 9]))

// //filter
// // const filter = (numbers, greaterThan) => {
// //   let result = []
// //   for (const number of numbers) {
// // //     if (number > greaterThan) {
// // //       result.push(number)
// // //     }
// // //   }
// // //   return result
// // // }
// // // console.log(filter([1, 2, 3, 4, 5, 6], 4))

// // // const num = [2, 3, 4, 5, 6, 7]
// // console.log(num.filter(num => num > 4 || num< 2))

// // // const userLogin=true;
// // // const youtubePremium=false;
// // // if(userLogin || youtubePremium){
// // //   console.log("Don't Show Ads:)")
// // // }else{
// // //   console.log("Show Ads :(")
// // // }

// const actors =[
//   {name:'Salman Khan ',networth:200000},
//   {name:'Akshay Kumar', networth:150000},
//   {name:'Amir khan',networth:10}, 
//   {name:'Kunal Darne', networth:1255},
//   {name:'bhushan Darne',networth:1452},
// ]
// // let result=actors.filter(actor => actor.networth >15)
// // let names = result.map(actor =>actor.name).join(' , ')
// // playground1.innerHTML = `<h1>${names}</h1>`
// console.log(actors.reduce((prev,curr)=>prev+curr.networth,0))

// //reduce
// function sum (a,b){
//   return a+b
// }
// const nums=[1,4,6]
// const result=nums.reduce(sum)
// console.log(result)
























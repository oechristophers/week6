let myName = "Ekene"
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
console.log(myName.charAt(3))
console.log(myName.substring(1 , 4))
console.log(myName.replace(myName.substring(1, 4),"lan") )
console.log(myName.indexOf("k"))

let newSen = "Welcome back " + myName

console.log(newSen)
console.log(myName > newSen)

let num1 = 20
let num2 = 10
let num3 = 15

res1 = num1 + num2
res2 = num2 - num3
res3 = num3 / num2
res4 = num1 % num2

console.log("num1 + num2 = " +  res1 );
console.log("num2 - num3 = " + res2);
console.log("num3 / num2 = " + res3);
console.log("num1 % num2 = " + res4);

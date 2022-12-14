// aula 1 - var, let e const
var x = 10
var y =15

if(y > 10){
    var x = 5
    console.log(x)
}
 console.log(x)

 let a = 10
let b = 15

if (b > 10){
    let a = 5
console.log(a)
}
 console.log(a)

 let i = 100

 for(let i = 0; i < 5; i++){
    console.log(i)
 }

 console.log(i)

 function logName(){
    const name = 'Gabby'
    console.log(name)
 }

 const name = 'Gabrielly'

 // aula - arrow function
 const sum = function sum  (a,b) {
    return a + b
 }

 const arrowSum = (a,b) => a + b


 console.log(sum(5, 5))
 console.log(arrowSum(5,5))

const greeting = (name) => {
   if(name) {
      return 'Olá' + name + '!'
   } else{
      return 'Olá!'
   }
}
console.log (greeting ('Gabrielly'))
console.log(greeting())

const testeArrow = () => console.log('testou!')
testeArrow()

const user = {

   name: 'Gaby',
   sayUserName(){
      var self = this
      setTimeout (function (){
         console.log(self)
         console.log('Username:' + self.name)
      }, 500)
   },
   sayUserNameArrow(){
      setTimeout(() =>{
         console.log('Username:' + this.name)
      },700)
   }
}

user.sayUserName()
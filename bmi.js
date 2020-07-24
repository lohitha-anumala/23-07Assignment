let jehHeight = 6
let toddHeight=100
let jehWeight=6.1
let toddWeight=120
let TRUE=true
let FALSE=false

 function bmiCalculator(height,mass){
     BMI=BMI= mass/(height*height)
     console.log(BMI)
 }
 jeh=bmiCalculator(jehHeight,jehWeight)
 todd=bmiCalculator(toddHeight,toddWeight)
 if(jeh>=todd){
     console.log(`Jeff’s BMI higher than off Todd${TRUE}`)
 }
 else{
     console.log(`Jeff’s BMI higher than off Todd${FALSE}`)
 }
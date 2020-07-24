
console.log('average---------------------------------')

function average(p1,p2,p3){
    avg=(p1+p2+p3)/3
    return avg;
}
Heath = average(89,120,103)
Zane = average(116,94,123)
Maraih=average(97,134,105)

if(Heath==Zane){
    console.log(`There is Tie. Average Score is ${Heath}`)
 elseif(Heath>Zane)
 {
    console.log(`Heath won the match . Average Score is ${Heath}`)
 }

}else{
    console.log(`Zane won the match . Average score is ${Zane}`)
}

console.log('Entering third team')

if(Heath>Zane && Heath > Maraih){
    console.log(`Heath won the match ${Heath}`)
}
else if(Zane > Maraih) 
{
    console.log(`Zane won the match ${Zane}`)
}else
{
    console.log(`Marai won the match ${Maraih}`)
}

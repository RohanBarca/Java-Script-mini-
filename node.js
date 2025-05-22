let p=prompt("Enter the Name of baddie");
function baddie(){
    let a= "Shukla"
    let b= "Dubey"
    let c= "Jain"
    let e= "Khan"
let d=Math.floor(Math.random()*4)
if(d==0){return a}
else if(d==1){return b}
else if(d==2){return c}
else if(d==3){return e}
}
console.log("Full Name of baddie is ", p ,baddie() )
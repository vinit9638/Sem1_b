let company_names = ["acer","HP","Dell","Lenovo"]

for(let j = 1;j<=5;j++){
    console.log("2 * ",j, " = ",j*2 );
}

for (let i in company_names){
    console.log(i);
}

for (let i of company_names){
    console.log(i);
}wsdf


function print_something(){
    let space = "Hello You click this button"
    document.getElementById('new').innerHTML = space
}   
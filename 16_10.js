// function additionFunction(){
//     let a = 5;
//     let b = 10;
//     let c = a + b;
//     return c;
// }

 
// function subFunction(){
//     let a = 5;
//     let b = 10;
//     let c = a - b;
//     return c;
// }


// function divFunction(){
//     let a = 5;
//     let b = 10;
//     let c = a / b;
//     return c;
// }


// function mulFunction(){
//     let a = 5;
//     let b = 10;
//     let c = a * b;
//     return c;
// }

// let ans = additionFunction();
// console.log(ans)


// Make a js function takes a list and return my name if it is present in that list

/*
1. Create function
2. parameter => list_of_name
3. start for loop
            if condition ? check " == "
4. print true positive
5. print false  
*/

function FIND_NAME(list1){
    let name = "uday";
    for (i of list1){
        if (i == name){
            
            console.log("NAme is present in the list")
            break;
            
        }
        
    }
}
let name_list = ['mahavir','uday','disha','raj','hirva','adman']
Find_name(name_list)
// Make a js function to count number of elements present in list 
// Also make a algorithum to check whether name is of female or male

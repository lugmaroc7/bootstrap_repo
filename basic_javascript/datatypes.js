// var fruits = ['apple','pear','grape','pineapple', 'orange'];
// console.log(fruits[0]);


//     var person = {
//         firstname: "Lugard",
//         lastname: "Imene",
//         middlename:"Europe",
//         gender:"Male",
//         age: 27,
//         feminist: false,
//         89: 'soem data'
     
// }
// console.log(person.firstname)
// console.log(person.lastname)
// var key= 89;
// console.log(person[89])


// var fullname= person.firstname + ' '+ person.lastname;
// console.log(fullname);

// var betterFullName = `My full name is: ${person.firstname} ${person.lastname}`;


// var myFloat = 10.5;

// console.log(typeof(myFloat));

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);



// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]) 
// }


// console.log('-----------------')
// for(let objectIndex in person){
//     console.log(person[objectIndex]);
// }

// for(let arrKey in fruits){
//     console.log(arrKey);
// }


// console.log('-----------------')



// for (let value of fruits) {
// console.log(value);
// }

// console.log('-----------------')

// var i = 0;
// while (i < fruits.length){
//     console.log(fruits[ i ]);
//     i++;
// }

// javascript program that will show odd and even number from 1 to 1000
// console.time('odd number calculator')

// for (let i = 0; i < 1000; i++){
//     if(i % 2 == 0){
//         console.log(`${i}- is even`)
//     }else {
//         console.log(`${i}- is odd`)
//     }

// }
// console.timeEnd('odd number calculator');
// End of javascript program that will show odd and even number from 1 to 1000


var countries = [
    'Nigeria',
    'Ghana',
    '',
];

var select = document.getElementById('countries');
var options= '';

for (let i = 0; i < countries.length;i ++){
    select.innerHTML += `<option value=`
}
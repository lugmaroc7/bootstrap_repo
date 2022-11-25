//given a sequential array of
//numbers write a program to stop
//executing the loop when the value is equals to 5


var numbers = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < numbers.length; i++){

    if (numbers[i]== 5){
        break;
    }

    console.log(`the current number is: ${ numbers[i]}`);

}


console.log('----------------------------')

var employees =[
    {
        name:"Godwin",
        salary: 2000,
        active: false,
        additional_salary: function(){
            return `their new salary is ${this.salary + 250}`;
        }

    },
    {
        name:"Choice",
        salary:1500,
        active: true,
        additional_salary: function(){
            return this.salary + 250;
        }

    },
    {
        name: "Rume",
        salary:17000,
        active:true,
        additional_salary: function(){
            return this.salary + 250;
        }

    },
    {
        name:"Favour",
        salary:20000,
        active:true,
        additional_salary: function(){
            return this.salary + 250;
        }
    },
    {
        name:"Adesuwa",
        salary:2000,
        active:false,
        additional_salary: function(){
            return this.salary + 250;
        }
    }


];

console.log(employees[0].additional_salary())

// for(let index = 0; index < employees.length; index++){

//     if(employees[index]['active']== true){

//         console.log(`We have paid the sum of ${employees[index]['salary']} to ${employees[index]['name']}`)
//     }
// }


for (let i = 0; i < employees.length; i++){
    

    let employee = employees [ i ];

    if (employee.active==false){
        continue;
    }

        console.log(`We have paid the sum of ${employee.salary} to ${employee.name}`)


    //console.log('employee'+ parseInt(i+1));

}

console.log(`hjshdjshjdhjsnhjshsjsh`)

//

//string slice
let example = 'Daniel is a web developer';
console.log(example.slice(0,6))


// Replacing string content
console.log(example.replace('Daniel', 'Emma'))

//string substring replacement and toUpperCase and toLowerCase
example1 = example.replace('Daniel', 'Emma')
example2 = example1.replace('web developer', 'Software Engineer')
console.log(example2.toUpperCase())

// from string to Array (split)
convert = 'Anna, Bella, Cilia, Dorcas, Esther, Felicia,';
newArray = convert.split(',');
console.log(newArray[0] + ' and ' + newArray[5])

// interpolate
//console.log(`${newAraay[0]} and ${newArray[5]}`)

// let text1 = "Hello World";
// console.log(text1.toUpperCase())

//Number methods

// let score = 95.123456;
// console.log(score.toPrecision(2))

// let score = 95;
// console.log(typeof score.toString())

//coverting variables to numbers
// let score = '95.123456';
// Number(score)
// console.log(typeof Number (score))


// let score = 'a 95.123456 aby';
// console.log(parseInt (score))


// let score = '95.123456 aby';
// console.log(parseFloat (score))


//to get a date
// today = new Date();
// console.log(typeof today.getFullYear())

//to get seconds in time
// today = new Date('2022-10-27');
// console.log(Number(today))


// people = ['Daniel', 'Helen','Nathan'];
// console.log(people.join(' '))

// people = ['Daniel', 'Helen','Nathan'];
// people.pop()
// console.log(people.join(' '))

// people = ['Daniel', 'Helen','Nathan'];
// poppedPerson=people.pop()
// console.log(poppedPerson)

//JS ARRAY PUSH element adds a new element to an array
// fruits = ['Banana', 'Apple']
// console.log(fruits.pop())

// fruits.pop();
// console.log(fruits)

//array push
// let techbros = ['Daniel', 'David','Nathan',]
// techbros.push('Elisha')
// console.log(techbros);

//array shift
// let techbros = ['Daniel', 'David','Nathan',]
// techbros.shift()
// console.log(techbros);

//array unshift
// let techbros = ['Daniel', 'David','Nathan',]
// techbros.unshift('Ebele')
// console.log(techbros);

//to delete an element in an array
// let techbros = ['Daniel', 'David','Nathan',]
// delete techbros[2]
// console.log(techbros);

// to merge arrays

// let techbros = ['Daniel', 'David','Nathan',]
// let mergedArray = techbros.concat
// console.log(mergedArray.join('||'));

//splicing and slicing arrays
// let techbros = ['Daniel', 'David','Nathan',]
// techbros.splice(1,0,'Ebube','Nnamdi kanu')
// console.log(techbros);

//slicing arrays
// let techbros = ['Daniel', 'David','Nathan',]
// techbros.splice(1,2,'Ebube','Nnamdi kanu')
// console.log(techbros);

//arrays splice
// let techbros = ['Daniel', 'David','Nathan',]
// // techbros.splice(1,2,'Ebube','Nnamdi kanu')
// let oga = techbros.slice(2)
// console.log(techbros.toString());

//reversing an array
// let techbros = ['Daniel', 'David','Nathan','Abraham','Ben','Ade','Zebudiah',]
// techbros.sort()
// console.log(techbros.reverse());

//sort an array
// let techbros = ['Daniel', 'David','Nathan','Abraham','Ben','Ade','Zebudiah',]
// console.log(techbros.sort());

//sort an array
// let techbros = [1,11,2,22,55,12,13,60,85,82,100]
// console.log(techbros.sort());

//sort an array in ascending of numbers
// let techbros = [1,11,2,22,55,12,13,60,85,82,100]
// let papa = 3;
// papa += 5
// const testingThing = (papa)=>{
//     if(papa== 3){
//         papa += papa + 5;
//         return papa;
//     }
 
// console.log('Its not equal to 3')
//     }
// console.log(papa)

// techbros.sort(
//     (a,b)=> a - b 
// )
// console.log(techbros);

// array iteration
// *const exampletins = {
//     0:45,
//     1:3,
//     forEach: ()=>{

//     }

// }

//forEach method does not return a new array
//result.forEach(value, index, array)
//forEach to determine even and odd number
// ***  const result = [56, 53, 77, 79, 2023, 120, 2, 50, 55,20,100,120]
// result.forEach(
//     (value,index, array)=>{

//         if(value%2 == 0)return console.log( `this ${value} is even`);

//         return console.log(`this is the ${index} and ${value} is odd` )
//     }
// )

//js Array map()
//***const humans = ['ella', 'bella','shiela']

// ****const result = [56, 53, 77, 79, 2023, 120, 2, 50, 55,20,100,120]
// let mappedResult = result.map(
//     (value,index, array)=>{
//         return console.log( `this is ${value + 5} is here`)
//     }
// )
// console.log(mappedResult)


//array filter
const result = [56,53,77,79,2023,120,2,50,55,20,100,120]
const myFunction = (value, index, array)=> {
    return value > 90

    let mappedResult = result.filter(myFunction)
    console.log(mappedResult)
}


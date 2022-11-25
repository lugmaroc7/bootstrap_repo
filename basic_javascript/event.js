// var first_input = document.getElementById('first_input');
// var second_input = document.getElementById('second_input');

// first_input.addEventListener('input',(event)=> {

// // event.target.value 
//     // first_input.value 
//     // event.target.value
//     // console.log(event);

//     // console.log(event);

//     document.getElementById('second_input').value = event.target.value 

// });

var first_input = document.getElementById('first_input');
var second_input = document.getElementById('second_input');

first_input.oninput = (event) => second_input.value = event.target.value;


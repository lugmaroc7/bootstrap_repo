// var button = document.getElementById('btn');
// var content = document.getElementById('content');

// button.onclick = () => {
//     var req = new XMLHttpRequest();

//     req.onload = () => {

//         console.log(req);

//         content.innerHTML = req.responseText
//     }

//     req.open('GET','../response.txt',true);

//     req.send();

// }


// button.onclick = () => {
//     fetch('../response.txt')
//     .then(response => response.text())
//     .then(text => content.innerHTML = text)
//     .catch(error => console.log(error))
// }


var todoText = document.getElementById('todoText');
var addTodo = document.getElementById('addTodo');
var todoContent = document.getElementById('todoContent');

var checkboxes = document.querySelectorAll('input[type=checkbox]')

var todos = [];

// **{
//     id: 1,
//     useId:2,
// title: "Create a todo app",
// completed: true


// }*/


addTodo.onclick = () => {



    // alert('i was click')


    let txt = todoText.value;
    if (txt != '') {
        pushTodo(txt);
    }

    todoText.value = '';

    attachEventListenersToCheckboxes();
    // console.log(todos);

}

let attachEventListenersToCheckboxes = () => {
    var checkboxes = document.querySelectorAll('input[type=checkbox]')

    checkboxes.forEach((checkbox, index) => {

        checkbox.onchange = (event) => {
         if (event.target.value== 'on'){
            alert('I am on')
         }else{
            alert('I am off')
         }

// console.log(event); 

        }

    })

    // console.log(checkboxes);
}

let pushTodo = (text) => {
    todos.push({
        id: todos.length + 1,
        userId: 3,
        title: text,
        completed: false
    });

    // todos.push(todo);
    displayTodo();

}

let displayTodo = () => {

    let htmlStr = '<ul class="list-group" >';

    for (let index in todos) {

        htmlStr += '<li class="list-group-item">'

        htmlStr += `<input class="form-check-input me-1" type="checkbox" data-index="${index}"/>`
        htmlStr += `<label>${todos[index].title}</label>`
        htmlStr += '</li>'

    }

    htmlStr += '</ul>'

    todoContent.innerHTML = htmlStr;

}

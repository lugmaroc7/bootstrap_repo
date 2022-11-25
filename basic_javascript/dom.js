// console.log(document)

// document.title = "na wah o"

var demo = document.getElementById('demo')

console.log(demo);
document.getElementById('demo').innerHTML= "<span style='color:red'>Hey,my first JavaScript dom operation!s</span>"


var elements = document.getElementsByClassName('p-class')
console.log(elements); 

   for (element of elements) {
    element.innerHTML = 'emmanuel'
    element.style.backgroundColor= "rgb(255,212,123)"
  
   }

   var imageLink = 'https://www.kindpng.com/picc/m/402-4027690_png-de-free-fire-transparent-png.png'


   var images = document.getElementsByTagName('img');

   console.log(images);

   //images[0].src = imageLink;
//images[0].height= "100"
//images[0].width = "150"

images[0].setAttribute('src', imageLink)
images[0].setAttribute('height', 100)
images[0].setAttribute('width', 150)

var div = document.createElement('div')
div.innerHTML = "some rubbish"

document.body.appendChild(div);

var wrapper = document.getElementById('wrapper');

wrapper.getElementsByTagName('div')
console.log(ps);


document.querySelector('#demo').innerHTML = "lol";

document.querySelectorAll('p');


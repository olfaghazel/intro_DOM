// Display hello
console.log('hello');

// Change h1 color
var h1 = document.getElementsByTagName('h1');
h1[0].style.color = 'red';

// On click Alert
var btn = document.getElementById('envoyer');
var name = '';

function getName() {
  var input = document.querySelector('#fname');
  name = input.value;
}

function sayHello() {
  alert('Hello from ' + name);
}

btn.addEventListener('click', sayHello);

// Counters
var plus = document.getElementsByClassName('btn-plus');
var counter = document.getElementsByClassName('counter');
var minus = document.getElementsByClassName('btn-minus');

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    counter[i].innerText++;
  });

  minus[i].addEventListener('click', function () {
    if (counter[i].innerText > 0) counter[i].innerText--;
  });
}

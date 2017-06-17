// JavaScript File
var button_content = document.querySelector('div');
button_content.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  button_content.textContent = 'Player 1: ' + name;
}
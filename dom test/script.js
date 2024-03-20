let myIdelement = document.getElementById("my-div");
let mytagelemnts = document.getElementsByTagName("p");
console.log(mytagelemnts);
mytagelemnts[1].innerHTML="This is the second paragraph";



document.getElementById('updateButton').addEventListener('click', function() {
document.getElementById('greeting').innerHTML = 'Welcome to our website!';
});

document.getElementById('styleButton').addEventListener('click', function() {
    var element = document.getElementById('specialText');
    element.style.color = 'blue';
    element.style.fontSize = '24px';
});


document.getElementById('disableButton').addEventListener('click', function() {
    document.getElementById('inputField').setAttribute('disabled', true);
});

document.getElementById('add-item').addEventListener('click', function() {
    const list = document.getElementById('dynamic-list');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
  });

  document.getElementById('dynamic-list').addEventListener('click', function(e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === 'LI') {
      e.target.remove();
    }
  });

  document.getElementById('add-input').addEventListener('click', function() {
    const form = document.getElementById('dynamic-form');
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    // newInput.setAttribute('name', 'dynamicInput[]');
    form.insertBefore(newInput, this);
  });
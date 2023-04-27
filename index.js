// Write your code here!

const element = document.getElementById('main');
element.remove();

const newHeader = document.createElement('h1');
newHeader.textContent = 'Jacob is the champion'; //I spent half an hour debugging this only to realize I had capitalized Champion so I don't really feel like one right now.
newHeader.id = "victory";
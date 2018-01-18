var buttonAdd = document.getElementById('addElem');

buttonAdd.addEventListener('click', function(e) {
	var withListElement = document.getElementsByClassName('listItem');
	
	var list = document.getElementById('list');
	var newElem = document.createElement('li');

	newElem.innerHTML = 'item ' + withListElement.length;
	newElem.className = 'listItem';

	list.appendChild(newElem);
});

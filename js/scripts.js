var buttonAdd = document.getElementById('addElem');

buttonAdd.addEventListener('click', function(e) {
	var withListElement = document.getElementsByClassName('listItem');
	console.log(withListElement)

	var withListElementNumber = withListElement.length;
	var list = document.getElementById('list');
	var newElem = document.createElement('li');

	newElem.innerHTML = 'item ' + withListElementNumber;
	newElem.className = 'listItem';

	list.appendChild(newElem);
});

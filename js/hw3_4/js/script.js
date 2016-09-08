(function() {

var test = {

	init: function () {

		var divContainer = document.createElement('div');
		divContainer.className = "container";
		divContainer.setAttribute('id', 'container');

		document.body.appendChild(divContainer);
	
	},

	title: function () {
		
		var divRow = document.createElement('div');
		divRow.className = "row";

		var divCol = document.createElement('div');
		divCol.className = "col-lg-6 text-center";
		divRow.appendChild(divCol);

		var h3 = document.createElement('h3');
		h3.innerHTML = 'Тест по программированию';	
		divCol.appendChild(h3);

		document.getElementById('container').appendChild(divRow);
	},

	question: function () {

		var form = document.createElement('form');
		form.setAttribute('action', '#');
		form.setAttribute('metod', 'post');

		var divRow = document.createElement('div');
		divRow.className = "row";
		form.appendChild(divRow);

		var divCol = document.createElement('div');
		divCol.className = "col-lg-6";
		divRow.appendChild(divCol);

		var listOl = document.createElement('ol');
		divCol.appendChild(listOl);

		for (var i = 1; i <= 3; i++) {

			var listItem = document.createElement('li');
			var textElem = document.createTextNode('Вопрос №' + i);
			listItem.appendChild(textElem);

			for (var j = 1; j <= 3; j++) {

				var divCheckbox	= document.createElement('div');
				divCheckbox.className = "checkbox";
				listItem.appendChild(divCheckbox);

				var labelCheck = document.createElement('label');
				labelCheck.setAttribute('for', 'q' + i + '_a' + j);
				divCheckbox.appendChild(labelCheck);

				var inputCheck = document.createElement('input');
				inputCheck.setAttribute('id', 'q' + i + '_a' + j);
				inputCheck.setAttribute('type', 'checkbox');
				labelCheck.appendChild(inputCheck);

				var textElemCheck = document.createTextNode('Вариант ответа №' + j);
				labelCheck.appendChild(textElemCheck);

			}

		listOl.appendChild(listItem);

		}

		document.getElementById('container').appendChild(form);
	},

	button: function () {
		
		var divRow = document.createElement('div');
		divRow.className = "row";

		var divCol = document.createElement('div');
		divCol.className = "col-lg-6 text-center";
		divRow.appendChild(divCol);

		var buttResult = document.createElement('button');
		buttResult.setAttribute('type', 'submit');
		buttResult.className = "btn btn-info";
		divCol.appendChild(buttResult);

		var textElemButt = document.createTextNode('Проверить мои результаты');
		buttResult.appendChild(textElemButt);

		document.getElementById('container').appendChild(divRow);	
	}

}

test.init();

test.title();

test.question();

test.button();

})();






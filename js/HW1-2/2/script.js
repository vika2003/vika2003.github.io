(function() {

var names = [];

for (var i = 0; i < 5; i++) {
	names[i] = prompt('Введите имя', '');

}

var user = prompt('Введите имя пользователя', '');
	
	if (user.length === 0) {
		alert('Вы не ввели имя пользователя');
		user = prompt('Введите имя пользователя', '');
	} 

var flag = 0;

for (var i = 0; i < 5; i++) {
	if (user == names[i]) {
		flag = 1;
		break;
	}  
}

	if (flag == 1) {
		alert(user + ', вы успешно вошли!');
	}  else {
		alert('В списке нет пользователя с таким именем');
	}

})();
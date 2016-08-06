alert('Вычисляем x^n');
	var x = prompt('Введите x', '');
	var n = prompt('Введите n', '');

	
function pow(x, n) {
	var answer=1;

	for (var i = 1; i <= n; i++) {
		answer = answer * x;

	}

	if (n < 0) {
		var n = -n;
	for (var i = 1; i <= n; i++) {
		answer = answer * (1/x);
	}
	}

	return answer;
}
	
	var calcPow;

	calcPow = pow(x, n);

	console.log('calcPow', calcPow);
	alert(calcPow);





function pow(x,n) {
	var answer=1;

	for (var i = 1; i <= n; i++) {
		answer = answer * x;
	}

	return answer;
}
	
	alert('Вычисляем x^n');
	var x=prompt('Введите x', '');
	var n=prompt('Введите n', '');

	var calcPow;

	calcPow = pow(x, n);

	console.log('calcPow', calcPow);
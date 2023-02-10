function EquationSecond(a,b,c) {
	var x = 0;
	var x1 = 0;
	var x2 = 0;
	var Delta = 0;
	var val = [];

	for (var i = 0; i < arguments.length; i++) {

		if ( arguments.length <= 3) {

			Delta = Math.pow(b,2)-(4*a*c);
		}
		else{
			return ("cette équation n'existe pas ");

		}
	}

	if (Delta > 0) 
	{
        var data = [];
		x1 = (-b + Math.sqrt(Delta))/2*a;
		x2 = (-b - Math.sqrt(Delta))/2*a;
		val.push(x1,x2)

		n1 = ("X1 = ",val[0]);
		n2 = ("X2 = ",val[1]);
        data.push()

		return val;

	} else if (Delta === 0)
	{
		x = - b/2*a;
		val.push(x);
		data = "la solution X = ",val[0];
		return data;
	}
	else if (Delta < 0)
	{
		return ("Pas de solution");
	}
	else{

		return ("L'équation est incorrecte");
	}
}
 


var form = document.querySelector('form');
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c');
var para = document.getElementById('para');

form.addEventListener('submit', function (e) {

    e.preventDefault()
    var data0 = a.value;
    var data1 = b.value;
    var data2 = c.value;
    var equa = EquationSecond(parseInt(data0),parseInt(data1),parseInt(data2));
    if ( equa){
        para.textContent = equa;
    }

})





'use strict'
module.exports = {

aritGeo: function (arrayNumbers)
{
	
	function checkArith(arrayNum)
	{
		var first = arrayNum[0];
		var diff = arrayNum[1] - arrayNum[0];
		var isArith = true;
		for (var i = 0; i < arrayNum.length; i++)
		{
			var expectedElement = first + (i * diff);
			if (arrayNum[i] != expectedElement)
			{
				isArith = false;
				break;
			}
		}
		return isArith;
	};
	function checkGeo(arrayNum)
	{
		function power(num,powerof){
			if (powerof === 0){
				return 1;
			}
			else{
				var result = 1;
				for (var i = 0; i < powerof; i++){
					result *= num;
				}
				return result;
			}
		};
		var first = arrayNum[0];
		var ratio = arrayNum[1] / arrayNum[0];
		var isGeo = true;
		for (var i = 0; i < arrayNum.length; i++)
		{
			var expectedElement = first * power(ratio,i);
			if (arrayNum[i] != expectedElement)
			{
				isGeo = false;
				break;
			}
		}
		return isGeo;
	};
	

	if (arrayNumbers.length < 1)
	{
		return 0;
	}
	else if (arrayNumbers.length < 2 )
	{
		return "It is not a progression";
	}
	else if (checkGeo(arrayNumbers) === true)
	{
		return "Geometric";
	}
	else if (checkArith(arrayNumbers) === true)
	{
		return "Arithmetic";
	}
	else
	{
		return -1;
	}
}
}
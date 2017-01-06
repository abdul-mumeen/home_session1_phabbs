function findMax(arrayOfNumbers){
	var max = arrayOfNumbers[0];
	for(var i = 1; i < arrayOfNumbers.length; i++){
		if (max < arrayOfNumbers[i]){
			max = arrayOfNumbers[i];
		}
	}
	return max;
}
function findMin(arrayOfNumbers){
	var min = arrayOfNumbers[0];
	for(var i = 1; i < arrayOfNumbers.length; i++){
		if (min > arrayOfNumbers[i]){
			min = arrayOfNumbers[i];
		}
	}
	return min;
}
function findMinMax(arrayNumbers){
	if (arrayNumbers.length <= 0)
	{
		return "Empty Array";
	}
	else if (arrayNumbers.length == 1 )
	{
		return arrayNumbers;
	}
	else
	{
		var min = findMin(arrayNumbers);
		var max = findMax(arrayNumbers);
		if (max == min)
		{
			var resultArray1 = [min];
			return resultArray1;
		}
		else
		{
			var resultArray2 = [min,max];
			return resultArray2;
		}
	}
function findMax(arrayOfNumbers){
	var max = arrayOfNumbers[0];
	for(var i = 1; i < arrayOfNumbers.length; i++){
		if (max < arrayOfNumbers[i]){
			max = arrayOfNumbers[i];
		}
	}
	return max;
}
function findMin(arrayOfNumbers){
	var min = arrayOfNumbers[0];
	for(var i = 1; i < arrayOfNumbers.length; i++){
		if (min > arrayOfNumbers[i]){
			min = arrayOfNumbers[i];
		}
	}
	return min;
}
function findMinMax(arrayNumbers){
	if (arrayNumbers.length <= 0)
	{
		return "Empty Array";
	}
	else if (arrayNumbers.length == 1 )
	{
		return arrayNumbers;
	}
	else
	{
		var min = findMin(arrayNumbers);
		var max = findMax(arrayNumbers);
		if (max == min)
		{
			var resultArray1 = [min];
			return resultArray1;
		}
		else
		{
			var resultArray2 = [min,max];
			return resultArray2;
		}
	}
}
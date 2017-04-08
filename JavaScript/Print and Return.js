function printAndReturn(inputArray)
{
  console.log(inputArray[0]);
  return inputArray[1];
}

var output = printAndReturn([3,4]);
console.log(output);

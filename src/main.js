/**
  * Generate a simple random Number between 0 and less than its parameter
  * @number {int} maxNumber
  * return {int} randomNumberGenerated
  */
function generateSimpleRandomNumber(number){

  var randomNumber = Math.floor(Math.random() * number);

  console.log(randomNumber);

  return randomNumber;

}

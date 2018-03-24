describe('Tests for simpleRandomNumer function', function () {

  //the test expects the result to be less than the maximum number
  it('test for less than the maximum number', function () {

    var maxNumber = 3,
        randomNumberGenerated = generateSimpleRandomNumber(maxNumber);

    expect(true).toBe(randomNumberGenerated < maxNumber);

  });

  //the test expects a number
  it('test for a number', function () {

    var maxNumber = 3,
        randomNumberGenerated = generateSimpleRandomNumber(maxNumber);

    expect(true).not.toBe(isNaN(randomNumberGenerated));

  });

  //the test expects a number equal to 0 or 1
  it('test for equal number', function () {

    var maxNumber = 2,
        randomNumberGenerated = generateSimpleRandomNumber(maxNumber);

    expect(randomNumberGenerated).toEqual(randomNumberGenerated === 0 ? 0 : 1);

  });

  //the test expects a integer number
  it('test for integer number', function () {

    var maxNumber = 10,
        randomNumberGenerated = generateSimpleRandomNumber(maxNumber);

    expect(true).toEqual(Number.isInteger(randomNumberGenerated));

  });

});

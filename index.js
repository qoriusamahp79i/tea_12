function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example of usage:
  const minValue = 1;
  const maxValue = 100;
  const randomNumber = getRandomNumber(minValue, maxValue);
  console.log(`Random number between ${minValue} and ${maxValue}: ${randomNumber}`);
  
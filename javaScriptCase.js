/* Function that determines whether a number is even or odd */

oddishOrEvenish(4433);

function oddishOrEvenish(value) {
  // First the sum is equal to 0
  var sum = 0;

  // The digits of the number add up
  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }

  // Check if the sum of digits is even or odd
  if (sum % 2 == 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

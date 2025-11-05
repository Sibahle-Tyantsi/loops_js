let numbers=[1,2,3,4,5];

console.log("For Loop:");
for(let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("While loop:");
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

console.log("Even numbers :");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum = ", sum);
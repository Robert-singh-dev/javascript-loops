// while loop

console.log("whil loop");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while
console.log("do while");
let j = 50;
do {
  console.log(j);
  j++;
} while (j <= 10);

// for loop
console.log("for loop");
for (k = 1; k <= 100; k++) {
  console.log(k);
}

// for loop continue and break
console.log("for loop");
for (k = 1; k <= 100; k++) {
  if (k === 50) {
    continue;
  }
  if (k === 90) {
    break;
  }
  console.log(k);
}

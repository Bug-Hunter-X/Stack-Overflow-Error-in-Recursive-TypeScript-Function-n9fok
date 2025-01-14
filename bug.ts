function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  if (n <= 0) {
    return;
  }
  console.log(n);
  printNumbers2(n - 1);
}

printNumbers2(5); // This also works fine

//The bug is in the following function
function printNumbers3(n: number): void {
  if (n <= 0) {
    return;
  }
  printNumbers3(n - 1);
  console.log(n);
}

printNumbers3(5); // This will print 1,2,3,4,5 but with a stack overflow error for big numbers
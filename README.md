# TypeScript Stack Overflow Bug

This repository demonstrates a common error in recursive functions written in TypeScript: stack overflow due to improper placement of the recursive call.

## Description
The `printNumbers3` function uses recursion to print numbers from 1 to n. However, the recursive call `printNumbers3(n - 1)` is placed before the `console.log(n)` statement. This causes the function to keep adding calls to the call stack until it exceeds the limit, resulting in a stack overflow error.

## How to Reproduce
1. Clone this repository.
2. Compile and run `bug.ts` using a TypeScript compiler (e.g., `tsc bug.ts` and then `node bug.js`).
3. Try running `printNumbers3` with a small number (e.g., 5) – it works correctly.
4. Try running `printNumbers3` with a large number (e.g., 10000) – it will crash with a stack overflow error.

## Solution
The solution involves moving the recursive call after the `console.log(n)` statement (see `bugSolution.ts`). This ensures that the recursive call is made after the current function call has completed its work, preventing a stack overflow.
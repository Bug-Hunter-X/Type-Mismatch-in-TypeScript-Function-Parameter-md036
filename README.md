# Type Mismatch in TypeScript Function Parameter
This example demonstrates a potential issue in TypeScript where a type mismatch in function parameters might not be caught during compilation.

## Bug Description
The `greet` function is defined to accept a string and a Date object as parameters. However, due to TypeScript's flexibility, calling the function with a string instead of a Date object for the date parameter will still compile without raising any type errors. This can lead to runtime errors.

## Solution
The solution involves using a stricter type checking mechanism, or utilizing type guards to ensure the inputs match the intended types. Consider applying assertions to input parameters to ensure they are indeed Date objects.
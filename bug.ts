function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
  return `Hello, ${person}, today is ${date.toDateString()}`;
}

greet("2", new Date()); //This will compile without error even though the input is a string instead of a Date object for the second parameter.
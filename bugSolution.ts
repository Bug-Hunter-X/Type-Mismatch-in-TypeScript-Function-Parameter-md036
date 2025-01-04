function greet(person: string, date: Date): string {
  //Check if the input is of the correct type
  if (!(date instanceof Date)) {
    throw new Error('Invalid date object provided.');
  }
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
  return `Hello, ${person}, today is ${date.toDateString()}`;
}

greet("2", new Date()); //This will throw error
greet("John Doe", new Date());
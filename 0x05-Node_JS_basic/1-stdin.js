// a program named 1-stdin.js that will be executed through command line
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = input.toString();
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});

process.on('exit', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});

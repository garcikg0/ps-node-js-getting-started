console.log('Current user is', process.env.USER);

console.log('\nScript executed with:');

console.log('VAL1 equal to:', process.env.VAL1);
console.log('VAL2 equal to:', process.env.VAL2);

// process.argv: [...]
// This array will have an item for every positional argument you specify when executing the Node script in order

// process.env is preferred because we can name these variables instead of writing out the argv fcn
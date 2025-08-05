import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfall', () => {
  console.log('please turn of the motor.');
setTimeout(() => {
  console.log('please turn of the motor Its is a gentle reminder.');
    
},2000)
});

console.log("the script is running")
myEmitter.emit('Waterfall');

console.log("The script is still running");
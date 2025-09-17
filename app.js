// emitter class import 
const EventEmitter = require('events')
// create an instance of EventEmitter
const emmitter = new EventEmitter();
// 1 . Define an events listener 
// emmitter.on("greet",(args)=>{
//     console.log(`Hello ${args.username} you are a good ${args.prof}`)
// })
// // 2. Trigger (emit ) the "greet" event  
// emmitter.emit("greet",{username:"Nakul kumar",prof:"Developer"})
//
// challenge

const eventcount = {
    "login": 0,
    "user-purchase": 0,
    "profile-update": 0,
    "user-logout": 0,
};

// Register listeners for each event type
Object.keys(eventcount).forEach(event => {
    emmitter.on(event, (...args) => {
        eventcount[event]++;
        console.log(`[${event}]`, ...args);
    });
});

// Summary event prints the current count
emmitter.on("summary", () => {
    console.log("Event Summary:", [eventcount]);
});

// Simulate eventscls
emmitter.emit("login", "Aman");
emmitter.emit("user-purchase", "gaming pc");
emmitter.emit("profile-update", "upgrade desktop chair");
emmitter.emit("user-logout", "Logout");
emmitter.emit("summary");
//2


// function createCounter(){
//     let count = 0; // This is remembered by the inner function
//     return function(){ // inner function closure
//         count++;
//         return count;
//     };
// }

// const counter = createCounter(); // outer function runs but count is preserved 
// console.log(counter()); //output1
// console.log(counter()); //output2 (remember previous ' count ')

// function createGreetings(name){
//     return function(){
//         return `Hello, ${name}!`;


//     };
// }  

// const greetAlice = createGreetings("Alice");
// console.log(greetAlice());

// const greetFazeel = createGreetings("Fazeel");
// console.log(greetFazeel());

// console.log(greetAlice());
// console.log(greetFazeel());

// PROMISES:

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;  // Simulate success/failure
        if (success) {
            resolve("Task completed!");  // Fulfilled
        } else {
            reject("Task failed!");  // Rejected
        }
    }, 2000);  // Wait 2 seconds (simulates async delay)
});

myPromise
    .then(result => console.log(result))  // Runs on success
    .catch(error => console.log(error));  // Runs on failure    




console.log("Hello from JS console!!");

console.log('Start.');


// setTimeout(() => {
//     console.log("Timeout finished...");
//     // alert("Announcement!!");
// },1000);

// console.log('End.');

// Example of a simple callback function
// function someFunction (anotherFunction) {
//     // Does sth
//     anotherFunction();
// }

// someFunction();

// function anotherFunction() {
//     yetAnotherFunction();
// }

// Another example of Callback function (the anonymous function that's defined)
// button.addEventListener('click', function() {

// })

const pizzaPromise = (boolValue) => {
    let pizzaPrep = new Promise((resolve, reject) => {
        console.log("Pizza is cooking...");
        setTimeout(() => {
            if (boolValue) {
                resolve("Pizza is here!");
            } else {
                reject("No pizza sorry!");
            }
        }, 5000);
    });
    return pizzaPrep;
};

pizzaPromise(true)
.then((message) => {
    console.log("Yayy!" + message);
})
.catch((error) => {
    console.log("Oops..." + error);
})
.finally(() => {
    console.log("Promise settled.");
});

console.log("I am not effected!!");
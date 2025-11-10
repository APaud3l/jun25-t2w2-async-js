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

pizzaPromise(false)
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

// Function written using promise and .then
function getLiveJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then((response) => response.json())
        .then((data) => {
            console.log("Joke: ", data.setup);
            console.log("Punchline: ", data.punchline);
        })
        .catch((error) => {
            console.error("Error fetching joke.", error);
        });

}

// setInterval(getLiveJoke, 5000);

// Function written using async/await
async function getJoke() {
    try{
    // request from the api
    response = await fetch('https://official-joke-api.appspot.com/random_joke')
    // convert the response to JSON
    data = await response.json();
    // print it in console
    console.log("Joke: ", data.setup);
    console.log("Punchline: ", data.punchline);
    } catch (error) {
        console.error("Error: ", error);
    }
}

getJoke();
console.log("I am running!!!");
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
    try {
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

async function getPokemonData() {
    const name = document.getElementById('pokemonName').value.toLowerCase();
    console.log(name);
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            console.error("Some error from the server!");
        }
        const data = await response.json();
        console.log(JSON.stringify(data, null, 4));

        const imgSrc = data.sprites.front_default;

        resultDiv.innerHTML =
            `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${imgSrc}" alt="${data.name}">
        `;
    } catch (error) {
        console.error("Something happened.");
        resultDiv.innerHTML =
            `
        <h2>${error.message}</h2>
        `;
    }
}

document.getElementById('catchPokemon').addEventListener('click', async () => {
    getPokemonData();
});

document.getElementById('getRandomFive').addEventListener('click', async () => {
    const resultDiv = document.getElementById('resultTeam');
    resultDiv.innerHTML = "Loading 5 Pokemons for your team...";

    // Get 5 random numbers
    const maxID = 1025;

    const randomIDs = Array.from({ length: 5 }, () => {
        return (Math.ceil(Math.random() * maxID));
    }

    );
    console.log("here?");
    console.log(randomIDs);


    // Fetch all pokemon in Parallel
    const promises = randomIDs.map(id => {
        return (fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json()));
    });
    console.log(promises);
    const pokemons = await Promise.all(promises);
    console.log("How about here?");
    console.log(pokemons);
    // Build HTML element to display your Pokemon team
    resultDiv.innerHTML = pokemons
        .map(data => {
            const imgSrc = data.sprites.front_default;

            return `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${imgSrc}" alt="${data.name}">
        `;
        }).join('    ');
});

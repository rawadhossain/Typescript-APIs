const user = {
    name: 'John',
    age: 30,
};

user.name = 'sdsdv';

console.log(user.name); // Output: "sdsdv"
//even though it is const, still changes

//readonly

type info = {
    readonly name: string;
    readonly age: number;
};

const user2: info = {
    name: 'John',
    age: 30,
};

/*
or,
const user2: Readonly <info> = {
    name: 'John',
    age: 30,
};
*/

//user2.name = 'sdsdv'; error
console.log(user2.name); // John

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

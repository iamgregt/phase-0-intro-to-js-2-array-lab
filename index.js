let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

const destructivelyPrependCat = name => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = name => [...cats, name];

const prependCat = name => [name, ...cats]

const removeLastCat = () => cats.slice(0, -1);

const removeFirstCat = () => cats.slice(1);
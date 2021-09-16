# NodeJS 101

Node is a "tool" (not exactly), that allows you to execute javascript code outside the browser. That way, you can code programs in nodejs and run them in your computer using the `node` tool.

## Getting started

### Hello world

Let's begin by creating a program that prints "Hello World".

- Open your terminal

- Create a directory so we can put all our js things in here.

```
mkdir nodejs101
cd nodejs101
```

- Create a `index.js` (you can use any name you want)

`touch index.js`

- Open VSCode in the current directory

```
code .
```

- Let's include our javascript code. For printing in the screen we use the function `console.log`

`console.log("Hello World")`

- Save your work and run it from the terminal:

`node index.js`

### Quick Javascript review

[Guide](https://hsablonniere.github.io/markleft/prezas/javascript-101.html#1.0)

#### Variables

Review variables from guide

#### Functions

Review functions from guide

#### Modules

You can split your code in multiple `.js` files and import them.

##### Using module.exports y require

We use `module.exports` to make a function in your `.js` file, available to other files. For example:

```
// test.js
function test(){
  console.log("This is the function in test.js");
}

module.exports = test;
```

```
// index.js
var test = require('./test.js');
test();
```

#### Using export and import

*Note: We need to include `"type": "module"` in our `package.json` in order to use this type of import.

We can also use `export` to export functions and other variables, and `import` to import it:

```
// test.js
function test(){
  console.log("This is the function in test.js");
}

export test;
```

```
// index.js
import { test } from './test.js';
test();
```



You can use it to export variables, constants, objects, functions, etc...

## Using npm (node modules)

Node has a repository of modules (libraries) that you can use. That will help you to reuse functionalities created by other in your own program.

The software for managing those libraries is called `npm` (Node package manager)

Dependencies in nodejs are stored in your current directory (in your project directory), inside a folder called `node_modules`. The list of packages installed is stored in `package.json`.

### Initialize the project

First thing we must do is tell node that the project will use npm.

`npm init`

This will create a initial `package.json` which basic information of the project

### Using a npm library

[npmjs](https://www.npmjs.com/) allows you to search any npm package. Let's use one called [uuid](https://www.npmjs.com/package/uuid).

`npm install uuid`

(we can add `--save` if we want to add it to our package.json)

`npm install uuid --save`





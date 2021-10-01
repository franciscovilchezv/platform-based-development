# NodeJS 101

Node is a "tool" (technically a Javascript Runtime Environment), that allows you to execute javascript code outside the browser. That way, you can code programs in NodeJS and run them in your computer using the `node` tool.

## Getting started

### Hello world

Let's begin by creating a program that prints "Hello World".

- Open your terminal

- Create a directory so we can put all our `.js` in there.

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

### npm

Node has a [broad variety of libraries (also known as modules)](https://www.npmjs.com/) already created that you can just import and start using in your project. 

`npm` (Node package manager) is the tool used to manage the dependencies of your project. In other words, it is the tool that will be in charged of downloading the libraries you use in your project, and record that dependency in a file called `package.json`

The syntax for installing a dependency is the next one:

`npm install <name_of_the_library> --save`

The `--save` option stores the dependency in the `package.json`. That way, if another developer downloads your project, it can know which libraries it is using by looking at the `package.json` file.

The library downloaded is store in your project in a directory called `node_modules`

Additionally, `package.json` stores additional information about your project, like the name, author, github repo, etc.

In order to initialize your `package.json` you can use the following command:

`npm init`

#### Installing our first module

Let's use one called [uuid](https://www.npmjs.com/package/uuid).

`npm install uuid --save`

You can see it now appears in your `package.json` and in `node_modules` with some of its own dependencies.

#### Modules

You can split your code in multiple `.js` files and import them.

In order to start importing modules, we need to include `"type": "module"` in our `package.json`

##### Importing and exporting modules

Let's create our own node module in order to understand what is going on.

Let's create a couple of functions in a new file `my_functions.js` and export them, so they are avaiable to be used by other files.

```
// my_functions.js
function hello_world(){
  console.log("This is the function in my_functions.js called hello_world");
}

function bye_world(){
  console.log("This is the function in my_functions.js called bye_world");
}
```

If we want to make that function available to other files, we add `export` at the beginning of the function.

```
// my_functions.js
export function hello_world(){
  console.log("This is the function in my_functions.js called hello_world");
}

export function bye_world(){
  console.log("This is the function in my_functions.js called bye_world");
}
```

```
// index.js
import { hello_world, bye_world } from './my_functions.js';

hello_world();
bye_world();
```

```
Output:

This is the function in my_functions.js called hello_world
This is the function in my_functions.js called bye_world
```

#### Import the `uuid` module

We can follow the example provided by the [documentation of `uuid`](https://www.npmjs.com/package/uuid)

```
import { v4 as v4 } from 'uuid';

v4();
```

You can provide an alias to the function imported as the do in their example

```
import { v4 as uuidv4 } from 'uuid';

uuidv4();
```

Notice that they are not typing `.js` at the end of the import. The short explanation is that they are referencing the folder instead of the `.js` file. The `import` statement will find the `index.js` file in that directory and use that as the imported file. They can also specify the file used for the imports in their `package.json`.

##### An old syntax for importing modules

In previous versions of NodeJS, modules used to be imported with the following syntax, for example, the `mysql` module:

```
var mysql = require('mysql');

console.log(mysql);
```

Which returned an object with all the functions the module `mysql` had. In order to use this old syntax, we need to remove the `"type": "module"` in our `package.json`

```
Output:

{
  createConnection: [Function: createConnection],
  createPool: [Function: createPool],
  createPoolCluster: [Function: createPoolCluster],
  createQuery: [Function: createQuery],
  escape: [Function: escape],
  escapeId: [Function: escapeId],
  format: [Function: format],
  raw: [Function: raw]
}
```

Some of the npm modules still provide that syntax as an example. However, we will need to import it using `import` instead of `require`. Our import will look like:

```
import * as mysql_library from 'mysql';

console.log(mysql_library);
```

Which will return the same output as before.


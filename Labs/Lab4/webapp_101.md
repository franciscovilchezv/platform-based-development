# My first web application

We will use [Angular framework](https://angular.io/) for creating a web application in this guide.

We will follow the official [Angular Guide](https://angular.io/guide/setup-local)

## Creating the Angular boilerplate

A `boilerplate` refers to an initial application with basic functionality where you can start.

Angular has its own cli (command line interface) for interacting with the Angular Project. If you haven't install them, use the following command:

```
npm install -g @angular/cli
```

## Create a new Web Application

Use the command:

`ng new my-chess-club`

Answer the questions with the following values:

```
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict **Yes**
? Would you like to add Angular routing? **No**
? Which stylesheet format would you like to use? **SCSS**
```

Go into the created directory:

`cd my-chess-club`

And start the project

`ng serve --open`

This will start a Web Server, which can be accessed at port `4200` by default. Your computer IP can be referenced as `127.0.0.1` or `localhost`. Remember you can communicate with a Web Server using a Web Browser.

## Looking at the project structure

The code of your project is primary located in `src`. It has an structure similar to:

```
src
├── app
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.css
└── test.ts
```

Angular uses `Typescript` instead of `Javascript`. Typescript files have the extension `.ts`. Additionally, we are using `.scss` instead of plain `.css`. But you can use your CSS code in there without any issue. For now, this is just a nonsense addition to the project.

Let's open the project in VSCode with:

`code .`

A brief description of the some of the files is explained below:

- `app` directory: Contains the default files of the initial page loaded.

- `app.component.html`: Includes the HTML of the initial website displayed when you access your Web Application. It has it's own `app.component.scss` and `app.component.ts` files, which are in charge of modifying only that `app.component.html`. You can include components into other components. That way, you can organize your website in multiple folders.

- `app.module.ts`: File that includes the dependencies of your website.

- `*.spec.ts`: Compilation files. You can ignore them.

## Creating a Simple Website

Let's start by clearing the content of `app.component.html` and just include a simple title.

`<h1>My Chess Club</h1>

Now let's create a table where we will display all the chess members. But let's do it more organized, let's create a component just for that table

`ng generate component members-table`

We can now include this component in our website by using the tag:

`<app-members-table></app-members-table>`

Notice how the CSS is independent for each component. They are completely isolated! Try it with

```
h1 {
  text-align: center;
}
```

Now let's create an [HTML table](https://www.w3schools.com/html/html_tables.asp) in our `members-table`.

```
<table>
  <tr>
    <th>Full name</th>
    <th>Birthday</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>Francisco Vilchez</td>
    <td>1991/05/26</td>
    <td>francisco@vilchez.com</td>
  </tr>
  <tr>
    <td>Zlatan Ibrahimovic</td>
    <td>1981/10/03</td>
    <td>zlatan@ibrahimovic.com</td>
  </tr>
</table>
```

And let's apply some CSS so it looks better:

```
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
```

It looks great! However, that data is not real. Let's fetch some real data from our database. Let's first imagine we have the data in a variable in our javascript.

```
// members-table.component.ts
// ...
export class MembersTableComponent implements OnInit {

  members = [
    {
      fullname: "Francisco Vilchez",
      birthday: "1991/05/26",
      email: "francisco@vilchez.com"
    },
    {
      fullname: "Zlatan Ibrahimovic",
      birthday: "1981/10/03",
      email: "zlatan@ibrahimovic.com"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
```

This is declaring a variable `members` which is available in our `members-table` component!. Variables defined outside a function do not need to include `var` at the begining. You can test that by including `{{members}}` in the html. It will show we have an array with two objects.

Now we will learn our first Angular directive. It is called `*ngFor`.  It allows us to iterate an array in the HTML.

For example:

```
<ul>
  <li *ngFor"let member of members">{{member.fullname}}</li>
</ul>
```

We can use the same logic and applied it to our table to show all values.

<table>
  <tr>
    <th>Full name</th>
    <th>Birthday</th>
    <th>Email</th>
  </tr>
  <tr *ngFor="let member of members">
    <td>{{member.fullname}}</td>
    <td>{{member.birthday}}</td>
    <td>{{member.email}}</td>
  </tr>
</table>

Now, let's get the data from a database

## Making an HTTP call from the UI

There is a component in angular that allows us to make HTTP calls. It's call a service. Let's create one:

`ng generate service member`

### app.module.ts

First, we need to include HTTP module in `app.module.ts` and include it in the `imports` fields.

`import { HttpClientModule } from '@angular/common/http';`

```
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```

### member.service.ts

Now, in our `member.service.ts` file, we include the `http` in the component:

```
constructor(
  private http: HttpClient
) { }
```

And create a function to get the data:

```
getMembers() {
    return this.http.get<any>('localhost:3000/members');
  }
```

Now we can call this function in the `members-table.component.ts` and use the data it returns instead of the hardcoded data.

### members-table.component.ts

We import the service so we can use it in the component

```
constructor(
    private memberService: MemberService
  ) { }
```

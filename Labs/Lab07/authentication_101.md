<!-- {% raw %} -->

# Authentication 101

In this guide, we will explain the basic flow in which we authenticate a use in Angular and store their session in the app.

However, we first need to create some tables in the database for storing user's data.

## Database

Let's keep it simple and just create a table for storing users

```sql
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  modified_date DATETIME NOT NULL,
  created_date DATETIME NOT NULL,
  PRIMARY KEY (id)
);
```

Notice this new attribute `UNIQUE`, which means that the column can not have values repeated. Kind of like a primary key.

## Backend

Let's now create a few APIs:
- `POST /users`: Register a new user
- `POST /login`: Validate that username and password are correct

### `POST /users`

```js
app.post('/users', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'my_chess_club'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " INSERT INTO user (username, password, modified_date, created_date) " +
                " VALUES (?, MD5(?), NOW(), NOW()) ";
  
  var myValues = [ req.body.username, req.body.password ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});
```

Notice that we are using the function `MD5()` of MySQL instead of storing the password directly. That will encrypt the password into 255 characters string, and store that string in the dabatase instead of the real password.

### `POST /login`

```js
app.post('/login', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'my_chess_club'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " SELECT id, username " +
                " FROM user " +
                " WHERE username = ? " +
                " AND password = MD5(?) ";
  
  var myValues = [ req.body.username, req.body.password ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results[0]);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});
```

We are also using the same `MD5()` function for the verifying the correctness of the password. Since the password is store in the DB as an `MD5` string, we need to apply the `MD5()` function before doing the comparison.

## Frontend

Let's create a few components that we will need:

- A `component` for doing the login
- A `component` for registering a new user
- A `component` in order to have a welcome screen (since our current homescreen is just /members)
- A new `service` which will hold all the calls to the backend regarding the authorization. Addionally, since the `service` can be used in any part of our app, we will use it also to store the currently logged in user in an attribute.

```
ng generate component home
ng generate component login
ng generate component register
ng generate service _services/auth
```

Let's include each component in a route:

```ts
// app-routing.module.ts

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // ...
]
```

### `auth.service.ts`

In this service, we will inluce the calls the the API for the login. But we will also store the data of the user currently logged in. That way, we will always have his `id` on hand if we need to use it for any transaction.

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;

  constructor(
    private http: HttpClient
  ) { }

  login(loginData: any) {
    return this.http.post<any>('http://localhost:3000/login', loginData).pipe(map(response => {
      this.setCurrentUser(response);
      return response;
    }));
  }

  addUser(user: any) {
    return this.http.post<any>('http://localhost:3000/users', user);
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isLoggedIn() {
    return Boolean(this.currentUser);
  }

  logout() {
    this.currentUser = null;
  }
}
```

We are storing the logged in use in the attribute `currentUser`. We included a pipe in the `login` call so we store the user in the `currentUser` variable everytime there is a login. Logout just means removing the data in `currentUser`.

### Home Component

Let's make our home simple:

```html
<!-- home.component.html -->

<h1>Welcome to the chess club!</h1>
```

### Register component

Same as before, we use the same logic for requesting data to the user by using a `form`.After it registers the user, we redirect to the `/login` page.

```html
<!-- register.component.html -->
<h3>Register</h3>

<form [formGroup]="registerForm" (ngSubmit)="addUser(registerForm.value)">
  <div>
    <label>Username:</label>
    <input type="text" formControlName="username">
  </div>
  <div>
    <label>Password:</label>
    <input type="password" formControlName="password">
  </div>

  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

```ts
// ...
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  // ...

  addUser(userData: any) {
    this.authService.addUser(userData).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
```

### Login Component

Very similar logic for the login.

```html
<h3>Login</h3>

<form [formGroup]="loginForm" (ngSubmit)="makeLogin(loginForm.value)">
  <div>
    <label>Username:</label>
    <input type="text" formControlName="username">
  </div>
  <div>
    <label>Password:</label>
    <input type="password" formControlName="password">
  </div>

  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

Then, we need to include the logic of the `makeLogin` function. It would be very simple, if it pass, we just redirect to `/members`, otherwise, we show an error message.

```ts
// ...
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

// ...
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  // ...

  makeLogin(loginData: any) {
    this.authService.login(loginData).subscribe(
      response => {
        console.log(response);
        if(response) {
          this.router.navigate(['/members']);
        }
        else{
          alert("Usuario Incorrecto");
        }
        
      },
      error => {
        console.error(error);
      }
    );
  }
}
```

Notice that after the login returns success, the data should be available in `this.authService.getCurrentUser()`.

### `app.component.*`

As we mentioned, we can use the authService anywhere, including our HTML. We just need to inject it the constructor of the respective component:

```ts
constructor(
  public authService: AuthService
) {
```

We can use it in different ways:

- We can take advantage of the `isLoggedIn()` function we have in order to verify if the user is logged in. So, if there is something we can to display only if the user is logged in, we can show/hide it using `*ngIf`.

- We can access the data of the user with the `getCurrentUser()` service. That way, we can display any data returned by it in our application, or use any attribute if we need during any transaction.

Let's add the paths for accessing the Home, Login and logout to our navigation list. Logout will just trigger a function that performs the logout. It's not a view itself:

```html
<!--app.component.html-->

<h1>{{title}}</h1>
<h2 *ngIf="authService.isLoggedIn()">{{authService.getCurrentUser().username}} is logged in</h2>
<h2 *ngIf="!authService.isLoggedIn()">Login to access all our features!</h2>

<ul>
  <li>
    <a routerLink="/">Home</a>
  </li>
  <li *ngIf="!authService.isLoggedIn()">
    <a routerLink="/login">Login</a>
  </li>
  <li *ngIf="!authService.isLoggedIn()">
    <a routerLink="/register">Register</a>
  </li>
  <li *ngIf="authService.isLoggedIn()">
    <a routerLink="/members">List members</a>
  </li>
  <li *ngIf="authService.isLoggedIn()">
    <a routerLink="/members/new">Create member</a>
  </li>
  <li *ngIf="authService.isLoggedIn()">
    <a href="javascript:void(0);" (click)="logout()">Logout</a>
  </li>
</ul>

<button (click)="showAuthor()">Who created this?</button>

<hr>

...
```

```ts
// app.component.ts

import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';

// ...
export class AppComponent {
  title = 'My chess club';

  constructor(
    public authService: AuthService,
    private router: Router
  ) {

  }

  // ...

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
```

### Guards

So far, we are successfully handling the navigation between the components after the user logs in or logs out. However, the user is still able to access directly by typing the url in the browser. If we want to block that, we need to use a `guard`.

A `guard` is a "function" in Angular which called by the router before a component is displayed. You specify in your router which `guard` should execute for a specific path.

The `guard` is usually in charge of doing a verification and take an action based on that. For example, it can verify if the user is logged in using our function `isLoggedIn()` and decide if it does something (like redirecting to another page if the user is not allowed to view that page).

Let's include a `guard` so we can block the following routes:

- `/members`
- `/members/new`
- `members/delete/:member_id`
- `members/edit/:member_id`
- `members/view/:member_id`

Our `guard` will be executed everytime a user tries to access that url. That way, we can block the user to access those urls if they are not logged in.

We create the `guard` with the command:

```
ng generate guard _guards/auth
```

And select the option `canActivate`, which is used when we want to block access to a website.

We include the logic on it, if the user is logged in, we just `return true;` otherwise, we redirect to the home screen:

```ts
// ...
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../_services/auth.service';

// ...
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLoggedIn()){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
```

Now we include the guard in the URLs we want to block:

```ts
// app-routing.module.ts
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'members', component: MembersTableComponent, canActivate: [AuthGuard] },
  { path: 'members/new', component: MembersNewComponent, canActivate: [AuthGuard] },
  { path: 'members/delete/:member_id', component: MembersDeleteComponent, canActivate: [AuthGuard] },
  { path: 'members/edit/:member_id', component: MembersEditComponent, canActivate: [AuthGuard] },
  { path: 'members/view/:member_id', component: MembersViewComponent, canActivate: [AuthGuard] }
];

// ...
```

### Keeping the session alive

We still have the issue that our session dies if we refresh the website. That is caused because we are saving the session in a variable, which just loses its value if we refresh the page.

The real fix for this is to generate a token in the backend in order to identify the session and send it back in the UI. That way, the UI can use that token to tell the backend which session is it using. The UI will have to validate for every transaction if the session is still alive.

Since that's a process that goes beyond the scope of the course, we can store the variable in `localStorage` instead of the `currentUser` attribute. That way, the user data will live in the `localStorage`` even if the website is refreshed.

I personally don't like this approach since I feel the data of the user is more exposed; however, I am including it below just for educational purposes:

```ts
// auth.service.ts

export class AuthService {
  // currentUser: any;

  constructor(
    private http: HttpClient
  ) { }

  login(loginData: any) {
    return this.http.post<any>('http://localhost:3000/login', loginData).pipe(map(response => {
      this.setCurrentUser(response);
      return response;
    }));
  }

  addUser(user: any) {
    return this.http.post<any>('http://localhost:3000/users', user);
  }

  setCurrentUser(user: any) {
    // this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));

  }

  getCurrentUser(): any {
    let user = localStorage.getItem('user');
    if (user){
      return JSON.parse(user);
    }
    return user;
  }

  isLoggedIn() {
    return Boolean(this.getCurrentUser());
  }

  logout() {
    // this.currentUser = null;
    localStorage.removeItem('user');
  }
}
```

<!-- {% endraw %} -->

# Bootstrap 101

[Bootstrap](https://getbootstrap.com/) is known as a CSS framework. It gives you a set of CSS classes and components that you can use in your web application so you don't spend too much time into the details of styling your app.

In this guide, we will just copy paste components from Bootstrap, but if you really want to understand what's going on (which you should if you plan to use it in a real life scenario), we recommend you to read [Bootstrap's documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/). Yep, all of it.

## Installation

The way you include Bootstrap in your Angular application is following the next steps:

1. Install bootstrap and its dependencies with `npm`

```
npm install bootstrap --save
npm install jquery --save
npm install popper.js --save
npm install bootstrap-icons --save
```

2. Add the dependencies in your app by including them in your `angular.json`. Replace all the `styles` and `scripts` tags in your `angular.json` file with the following `imports`:

```
....
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
....
```

If you start your project in Angular, you will notice that it now looks different (not better, just different). This is because bootstrap added a tons of basic classes for tables, titles, etc...

## `app.component.*`

Let's start using a few components so you can learn about the power of a CSS Framework. Let's start by changing our navigation to a better one. Instead of the list we have, let's use Bootstrap's [Navbar](https://getbootstrap.com/docs/5.1/components/navbar/) component.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">My Chess Club</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="/">Home</a>
        </li>
        <li class="nav-item dropdown" *ngIf="authService.isLoggedIn()">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Members
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" routerLink="/members">List</a></li>
            <li><a class="dropdown-item" routerLink="/members/new">Create</a></li>
          </ul>
        </li>
        <li class="nav-item" *ngIf="!authService.isLoggedIn()">
          <a class="nav-link" routerLink="/login">Login</a>
        </li>
        <li class="nav-item" *ngIf="!authService.isLoggedIn()">
          <a class="nav-link" routerLink="/register">Register</a>
        </li>
        <li class="nav-item" *ngIf="authService.isLoggedIn()">
          <a class="nav-link" href="javascript:void(0);" (click)="logout()">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

As you can see, we changed the example from the website and change the `href="#"` for our `routerLink` syntax since we are using angular. We are including our `*ngIf` statements also.

Just to show off, let's also include a [Footer](https://getbootstrap.com/docs/5.1/examples/footers/).

```html
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <i class="bi-bezier2"></i>
      </a>
      <span class="text-muted">© 2021 Francisco</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi-instagram"></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi-facebook"></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi-youtube"></i></a></li>
    </ul>
  </footer>
</div>
```

## `home.component.*`

Now let's include a [Hero](https://getbootstrap.com/docs/5.1/examples/heroes/) in the html of our welcome page. The `home.component.html` will looks like:

```html
<div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img src="https://i.guim.co.uk/img/media/699cce4914b90ae0ba89787178bc48314d50eb89/0_84_5081_3223/master/5081.jpg?width=940&quality=45&auto=format&fit=max&dpr=2&s=2f25fd28b1297e71cf54e63474c91b22" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3">Play with the best</h1>
      <p class="lead">My Chess Club is open to all chess players who want to play and practice with the best chess players of our country. We invite to be part of this great family!</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" *ngIf="authService.isLoggedIn()" (click)="logout()">Logout</button>
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" *ngIf="!authService.isLoggedIn()" routerLink="/login">Login</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" (click)="showAuthor()">More info</button>
      </div>
    </div>
  </div>
</div>
```

Don't forget to move the `showAuthor()` function form the `app.component.ts` to the `home.component.ts`. And also we need to inject the `authService` so we can use it in the HTML.

```ts
// ...
export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  // ...

  showAuthor() {
    alert("Francisco :)");
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
```

## `login.component.*`

Now we will improve our login [form](https://getbootstrap.com/docs/5.1/forms/overview/). We will include it in a [container](https://getbootstrap.com/docs/5.1/layout/containers/) so it has some margin on the sides.

```html
<div class="container">
  <h3>Login</h3>
  <form [formGroup]="loginForm" (ngSubmit)="makeLogin(loginForm.value)">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Username</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="username">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" formControlName="password">
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

```

## `register.component.*`

Same process as before

```html
<div class="container">
  <h3>Register</h3>
  <form [formGroup]="registerForm" (ngSubmit)="addUser(registerForm.value)">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Username</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="username">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" formControlName="password">
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
```

## `member-new.component.*`

We will apply same concept to create the form to create a new member. We will get inspiration from the [examples](https://getbootstrap.com/docs/5.1/examples/).

```html
<div class="container">
  <h3>Create a new user</h3>
  <form [formGroup]="membersForm" (ngSubmit)="addChessMember(membersForm.value)">
    <div class="mb-3">
      <label for="fullname" class="form-label">Full name</label>
      <input type="text" class="form-control" id="fullname" formControlName="fullname">
    </div>
    <div class="mb-3">
      <label for="birthday" class="form-label">Birthday</label>
      <input type="date" class="form-control" id="birthday" formControlName="birthday">
    </div>
    <div class="mb-3">
      <label for="ranking" class="form-label">Ranking</label>
      <input type="number" class="form-control" id="ranking" formControlName="ranking">
    </div>
    <div class="mb-3">
      <label for="gender" class="form-label">Gender</label>
      <input type="text" class="form-control" id="gender" formControlName="gender">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" formControlName="email">
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
```

## `member-edit.component.*`

Same as the previous one

```html
<div class="container">
  <h3>Editing an existing user</h3>
  <form [formGroup]="membersForm" (ngSubmit)="saveChessMember(membersForm.value)">
    <div class="mb-3">
      <label for="fullname" class="form-label">Full name</label>
      <input type="text" class="form-control" id="fullname" formControlName="fullname">
    </div>
    <div class="mb-3">
      <label for="birthday" class="form-label">Birthday</label>
      <input type="date" class="form-control" id="birthday" formControlName="birthday">
    </div>
    <div class="mb-3">
      <label for="ranking" class="form-label">Ranking</label>
      <input type="number" class="form-control" id="ranking" formControlName="ranking">
    </div>
    <div class="mb-3">
      <label for="gender" class="form-label">Gender</label>
      <input type="text" class="form-control" id="gender" formControlName="gender">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" formControlName="email">
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
```

## `member-view.component.*`

Let's use the same form to display the information, just with the fields [disabled](https://getbootstrap.com/docs/4.0/components/forms/#disabled-forms) so they can't be modified.

```html
<div class="container">
  <h3>Create a new user</h3>
  <form [formGroup]="membersForm">
    <fieldset disabled>
      <div class="mb-3">
        <label for="fullname" class="form-label">Full name</label>
        <input type="text" class="form-control" id="fullname" formControlName="fullname">
      </div>
      <div class="mb-3">
        <label for="birthday" class="form-label">Birthday</label>
        <input type="date" class="form-control" id="birthday" formControlName="birthday">
      </div>
      <div class="mb-3">
        <label for="ranking" class="form-label">Ranking</label>
        <input type="number" class="form-control" id="ranking" formControlName="ranking">
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Gender</label>
        <input type="text" class="form-control" id="gender" formControlName="gender">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" formControlName="email">
      </div>
    </fieldset>
  </form>
  <button class="btn btn-primary mt-3" routerLink="/members">Go back</button>
</div>
```

```ts
// ...
export class MembersViewComponent implements OnInit {
  membersForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService
  ) {
    this.membersForm = this.formBuilder.group({
      fullname: [''],
      birthday: [''],
      ranking: [''],
      gender: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const member_id = data.get('member_id');

        this.memberService.getMemberById(member_id).subscribe(
          response => {
            console.log(response);
            this.membersForm.patchValue(response);
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

}

```

## `member-list.component.*`

Let's also make our [table](https://getbootstrap.com/docs/5.1/content/tables/) a little more fancy. We don't need to do much, just delete the CSS with have right now in our `member-table.component.scss` and change our `member-table.component.html` to match the format in the Bootstrap table example.

Let's change the edit and delete button for some [icons](https://icons.getbootstrap.com/). We will end up with an HTML like this:

```html
<div class="container">
  <h1>Chess members</h1>

  <p>This is our family so far. Join as soon as you can!</p>
  
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Full name</th>
        <th>Birthday</th>
        <th>Ranking</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of members">
        <td><a [routerLink]="['/members/view/', item.member_id]">{{item.fullname}}</a></td>
        <td>{{item.birthday}}</td>
        <td>{{item.ranking}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.email}}</td>
        <td>
          <a [routerLink]="['/members/edit/', item.member_id]"><i class="bi-pencil-fill"></i></a>
        </td>
        <td>
          <a href="javascript:void(0);" (click)="deleteMember(item.member_id)"><i class="bi-trash"></i></a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## `member-delete.component.*`

We will do the delete member as a hero also.

```html
<div class="px-4 py-5 my-5 text-center">
  <h1 class="display-5 fw-bold">Deleting a member</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">This action can't be undone, so please, verify that you know what you are doing before confirming or clicking the button below. Are you sure you want to delte the member {{member_id}}?.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" class="btn btn-danger btn-lg px-4 gap-3" (click)="deleteMember(member_id)">Proceed with delete</button>
      <button type="button" class="btn btn-outline-secondary btn-lg px-4" (click)="goBack()">No, take me back please</button>
    </div>
  </div>
</div>
```

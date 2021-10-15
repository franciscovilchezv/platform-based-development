# CRUD Angular

In this guide, we will create a CRUD in Angular using the API we created with NodeJS. We will use the Angular router to have different pages and move between each of them by changing the URL.

We will work based on the Angular project we did in previous lab.

## Show Members UI

We already created our page for listing the members in the chess club. But let's tweak it a little bit.

### Type variables

As we mentioned, `typescript` provides some additional features that `javascript` doesn't. For example, declaring the type variables. Eventhough `typescript` doesn't enforce it, you may run into some weird errors if you let `typescript` to do all the job about inferring the type of variables you are using. Let's learn a few [type variables](https://www.typescriptlang.org/docs/handbook/basic-types.html):


- `Number`, `String`, `Boolean`: The same as you have used before.
- `any`: It's an easy type you can use when you don't want to specify the type. It is usually used when you are going to receive an object (dictionary).
- `[]`: You use it to specify an array of something. For example: `Number[]`, `any[]`.

Now let's add some type variables, for example, we know our variable members is going to be an array of dictionaries. So we can use:

```typescript
members: any[] = [
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
```

As you noticed, we specified the type of the variable next to the variable itself.

You may have noticed that if we deleted the default values we had in our variable `members` our app will crash. The issue was cause because Angular didn't know what value to expect inside `members`. Now that we specified its type, we can delete the default values and no error will be thrown.

```typescript
members: any[] = [];
```

## Create a new member

We will need to create a new component in which we will include the `form` where the use can create a new chess member. Let's start by creating the component:

`ng generate component members-new`

As we can see, a directory `members-new` with their respective HTML, JS and CSS was created.

Now the problem is that we need to tell angular that the `members-new` component should be displayed when the user navigates to something like `/members/new`. The Angular Router will help us to define that

### Routing

The angular router allows you to configure which component should be displayed for a specific url. Let's start by adding the Angular router to our app

`ng generate module app-routing --flat --module=app`

It will create a file called `app-routing.module.ts`. This will display a component in a reserved html tag called `<router-outlet>` depending on the url. Let's define some urls in our router:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersNewComponent } from './members-new/members-new.component';
import { MembersTableComponent } from './members-table/members-table.component';

const routes: Routes = [
  { path: '', component: MembersTableComponent },
  { path: 'members', component: MembersTableComponent },
  { path: 'members/new', component: MembersNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Notice we had to add some dependencies at the top, and also modify the imports and exports at the bottom.

We created an variable routes, with all the routes we wanted to add. For example, the url `''`, which will mean typing no url, will redirect to our `MembersTableComponent`, which is an alias for our component `members-table`. The same component will be displayed if the use types the url `members`.

However, if we change the url right now, nothing will happen. That's because the component associated to the url will be displayed in an html tag called `<router-outlet>`. That tag will be replace with the content of the component associated with the current url. Let's include that tag in our `app.component.html`. We will remove the `<app-members-table>` tag, since we are only going to show that in some urls. For example, the table won't be displayed when are creating a new member. But let's keep the title, since we may want to show that in all the pages.

```
<h1>{{title}}</h1>

<router-outlet></router-outlet>
```

Now we can see that our app will show different results based on the url, you can try the following urls:

- localhost:4200
- localhost:4200/members
- localhost:4200/members/new

### Navigation

Right now, the only way the user can switch between views is by using typing the URL. Let's add a few links below the title so the users can navigate using them. Since we want this to appear in all pages, let's include it in our `app.component.html`:

```html
<ul>
  <li>
    <a routerLink="/">Home</a>
  </li>
  <li>
    <a routerLink="/members">List members</a>
  </li>
  <li>
    <a routerLink="/members/new">Create member</a>
  </li>
</ul>
```

Notice that the attribute we will usually use for our `<a>` links in plain HTML would be `href`. However, for angular we need to use `routerLink` instead.

### Angular Events

So far, we have been able to use attributes from our `.component.ts` in two different ways:

- using `{{your_variable_here}}`
- using directives like `*ngFor`

However, we haven't seen how to call a function that we declare in our `.compoment.ts` file. One way is executing a funtion based on a event. That means, tell our HTML to call a function when some event occurs (like a click pressed, mouse hover, etc...).

The way we do this is using the following syntax. Let's add the following code in our `app.component.html`

```html
<button (click)="showAuthor()">Who created this?</button>
```

And let's declare the function `showAuthor` in the `app.component.ts`

```typescript

export class AppComponent {
  // ...

  showAuthor() {
    alert("Francisco :)");
  }
}
```

As we can see, the function `showAuthor` will be called when the event `click` occurs in our button.

### Create members logic

Now, we can include the HTML for our `members-new` component. We will skip the details of the HTML, but can find the definitions of the components we will use in the [documentation website](https://www.w3schools.com/html/)

- members-new.component.html

```html
<form>
  <div>
    <label>Full name:</label>
    <input type="text">
  </div>
  <div>
    <label>Birthday:</label>
    <input type="date">
  </div>
  <div>
    <label>Ranking (rating):</label>
    <input type="number">
  </div>
  <div>
    <label>Gender:</label>
    <input type="text">
  </div>
  <div>
    <label>Email:</label>
    <input type="email">
  </div>
  
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

In order to know that the user clicked the `Submit` button is by adding the click event that we learned. However, there is another event use to know when the button type submit is pressed, which is by adding the event `ngSubmit` to the form. Let's call a function `addChessMember` function when that event is triggered.

```html
<form (ngSubmit)="addChessMember()">
  <div>
    <label>Full name:</label>
    <input type="text">
  </div>
  <div>
    <label>Birthday:</label>
    <input type="date">
  </div>
  <div>
    <label>Ranking (rating):</label>
    <input type="number">
  </div>
  <div>
    <label>Gender:</label>
    <input type="text">
  </div>
  <div>
    <label>Email:</label>
    <input type="email">
  </div>
  
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

In order to use that event, we need to include the following module in `app.module.ts`

```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MembersTableComponent,
    MembersNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

There is one issue though. We are not accessing the data from the HTML in our function. There are different ways to achieve this. Angular recommends the usage of a `FormGroup` in order to link the values from the form to a variable that can be accessed in our typescript.

```ts
import { FormBuilder, FormGroup } from '@angular/forms';

export class MembersNewComponent implements OnInit {
  membersForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.membersForm = this.formBuilder.group({
      fullname: [''],
      birthday: [''],
      rating: [''],
      gender: [''],
      email: ['']
    });
  }
  //...
}
```

And we include each variable declared for our `membersForm` variable in each of our input fields in the following way:

```html
<form [formGroup]="membersForm" (ngSubmit)="addChessMember(membersForm.value)">
  <div>
    <label>Full name:</label>
    <input type="text" formControlName="fullname">
  </div>
  <div>
    <label>Birthday:</label>
    <input type="date" formControlName="birthday">
  </div>
  <div>
    <label>Ranking (rating):</label>
    <input type="number" formControlName="rating">
  </div>
  <div>
    <label>Gender:</label>
    <input type="text" formControlName="gender">
  </div>
  <div>
    <label>Email:</label>
    <input type="email" formControlName="email">
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
```

Notice that we are now passing the values in the form in `addChessMember(membersForm.value)`. We can receive the value in our function in the typescript:

```ts
addChessMember(values: any){
  console.log(values);
}
```

Now, we can send that data to the backend. First, we declare the function that will call the backend in our `members.service.ts` file.

```ts
insertMember(member: any) {
  return this.http.post<any>('http://localhost:3000/members', member);
}
```

And we invoke it from our `members-new.component.ts` file. We need to import the service file and also we will include a module for controlling the navigation for the typescript, so we can navigate to `/members` after the insert is done.

```ts
import { Router } from '@angular/router';
import { MemberService } from '../_services/member.service';

// ...

constructor(
  private memberService: MemberService,
  private router: Router
) {
  // ...
}

// ...

addChessMember(values: any){
  this.memberService.insertMember(values).subscribe(
    response => {
      console.log(response);
      this.router.navigate(['/members']);
    },
    error => {
      console.error(error);
    }
  );
}
```

Notice we are using `console.log` to print the `response` from the backend.

## Delete a chess member

For deleting a chess member, let's add button in our table, so when they click it, we will take the user to another view in which they can confirm if the want to delete the chess member or not. `members-table.component.html` will look like:

```html
<table>
  <tr>
    <th>Full name</th>
    <th>Birthday</th>
    <th>Ranking</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Delete</th>
  </tr>
  <tr *ngFor="let item of members">
    <td>{{item.fullname}}</td>
    <td>{{item.birthday}}</td>
    <td>{{item.ranking}}</td>
    <td>{{item.gender}}</td>
    <td>{{item.email}}</td>
    <td><button (click)="deleteMember(item.member_id)">Delete</button></td>
  </tr>
</table>
```

Notice that we are passing the `member_id` to the `deleteMember` function, so we can receive it in the javascript. In that function, we will redirect to a new page where it will ask the user if they are sure that they want to delete the user. Let's create that component:

```
ng generate component members-delete
```

Let's link that new component to a url. However, this page will need to show the confirmation message depending on the `member_id` that will be deleted. So we will have to pass the `member_id` to this page. The recommended way to do that is by using the `params` in the url. So our `app-routing.module.ts` will now include:

```ts
import { MembersDeleteComponent } from './members-delete/members-delete.component';

const routes: Routes = [
  // ...
  { path: 'members/delete/:member_id', component: MembersDeleteComponent }
]
```

Our `members-table.component.ts` will navigate to that url:

```ts
import { Router } from '@angular/router';

constructor(
    // ...
    private router: Router
  ) { }

// ...
deleteMember(member_id: any){
  this.router.navigate(['/members/delete', member_id]);
}
```

Now in the `members-delete.component.ts` we need to access that `member_id` value in the URL. We do that in the following way:

```ts
import { ActivatedRoute } from '@angular/router';

// ...

export class MembersDeleteComponent implements OnInit {
  member_id: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.member_id = data.get('member_id');
      }
    );
  }

}
```

And we can use the member_id variable in our `members-delete.component.ts`

```
<h5>Are you sure you want to delete the member {{member_id}}?</h5>

<button (click)="deleteMember(member_id)">Yes</button>
<button (click)="goBack()">No</button>
```

`deleteMember` will use a service in charge of calling the API for deleting the member. The api call in the `service.ts` will look like:

```ts
deleteMember(member_id: any) {
  return this.http.delete<any>(`http://localhost:3000/members/${member_id}`);
}
```

And that function will be called from our `members-delete.component.ts`:

```ts
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../_services/member.service';

// ...

constructor(
  // ...
  private memberService: MemberService,
  private router: Router
) { }

// ...

deleteMember(member_id: any) {
  this.memberService.deleteMember(member_id).subscribe(
    response => {
      console.log(response);
      this.router.navigate(['/members']);
    },
    error => {
      console.error(error);
    }
  );
}

goBack() {
  this.router.navigate(['/members']);
}
```

## View data of a chess member

Let's allow the users to click in the users chess name and it will redirect to another page where they can see their information.

```
ng generate component members-view
```

```ts
// app-routing.module.ts

import { MembersViewComponent } from './members-view/members-view.component';

const routes: Routes = [
  // ...
  { path: 'members/view/:member_id', component: MembersViewComponent }
];
```

```html
<!-- members-table.component.html-->
<table>
  <tr>
    <th>Full name</th>
    <th>Birthday</th>
    <th>Ranking</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Delete</th>
  </tr>
  <tr *ngFor="let item of members">
    <td><a [routerLink]="['/members/view/', item.member_id]">{{item.fullname}}</a></td>
    <td>{{item.birthday}}</td>
    <td>{{item.ranking}}</td>
    <td>{{item.gender}}</td>
    <td>{{item.email}}</td>
    <td><button (click)="deleteMember(item.member_id)">Delete</button></td>
  </tr>
</table>
```

Just for fun, this time we used another way to redirect to another url, which is using `routerLink`. We could've used `click` instead also.

We have an API that returns us the information of one member. Let's include it in our `.service.ts`

```ts
getMemberById(member_id: any) {
  return this.http.get<any>(`http://localhost:3000/members/${member_id}`);
}
```

And we can call that function to get the member's data based on the member_id that we get from the url in our `members-view.component.ts`:

```ts
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../_services/member.service';

//...

export class MembersViewComponent implements OnInit {
  member: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const member_id = data.get('member_id');

        this.memberService.getMemberById(member_id).subscribe(
          response => {
            console.log(response);
            this.member = response
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

There is a chance that the data takes too long to load and our HTML will throw error since it will try to print values that does not load yet. Because of that, we include an `*ngIf` directive. Which hide/show an HTML tag based on a variables value. This way, we ensure that we only display that data if variable value `member` has data in it;

```html
<div *ngIf="member">
  <h3>
    Member {{member.member_id}}
  </h3>
  
  <p>{{member.fullname}}</p>
  
  <p>{{member.birthday}}</p>
  
  <p>{{member.ranking}}</p>
  
  <p>{{member.gender}}</p>
  
  <p>{{member.email}}</p>
</div>

```


## Edit a chess member

In a similar way, we will create a button where users can edit a members information:

```
ng generate component members-edit
```

```ts
// app-routing.module.ts

import { MembersEditComponent } from './members-edit/members-edit.component';

const routes: Routes = [
  // ...
  { path: 'members/edit/:member_id', component: MembersEditComponent }
];
```

```html
<!-- members-table.component.html-->

<table>
  <tr>
    <th>Full name</th>
    <th>Birthday</th>
    <th>Ranking</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
  <tr *ngFor="let item of members">
    <td><a [routerLink]="['/members/view/', item.member_id]">{{item.fullname}}</a></td>
    <td>{{item.birthday}}</td>
    <td>{{item.ranking}}</td>
    <td>{{item.gender}}</td>
    <td>{{item.email}}</td>
    <td><button [routerLink]="['/members/edit/', item.member_id]">Edit</button></td>
    <td><button (click)="deleteMember(item.member_id)">Delete</button></td>
  </tr>
</table>
```

```ts
// members.service.ts
updateMember(member_id:any, member: any) {
  return this.http.put<any>(`http://localhost:3000/members/${member_id}`, member);
}
```

```ts
// members-edit.component.ts
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../_services/member.service';

// ...
export class MembersNewComponent implements OnInit {
  membersForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private router: Router
  ) {
    this.membersForm = this.formBuilder.group({
      fullname: [''],
      birthday: [''],
      ranking: [''],
      gender: [''],
      email: ['']
    });
  }

  // ...

  addChessMember(values: any){
    this.memberService.insertMember(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/members']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
```

Notice that we are using the `formGroup` to link the values to the HTML. The same way we did with the create members. Because of that, some people recycle the create component for the edit, since they are usually the same. We are using a different one just for academical purposes:

```html
<!--members-edit.component.ts-->

<form [formGroup]="membersForm" (ngSubmit)="saveChessMember(membersForm.value)">
  <div>
    <label>Full name:</label>
    <input type="text" formControlName="fullname">
  </div>
  <div>
    <label>Birthday:</label>
    <input type="date" formControlName="birthday">
  </div>
  <div>
    <label>Ranking (rating):</label>
    <input type="number" formControlName="ranking">
  </div>
  <div>
    <label>Gender:</label>
    <input type="text" formControlName="gender">
  </div>
  <div>
    <label>Email:</label>
    <input type="email" formControlName="email">
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
  
</form>
```

In order to make life simpler for the UI, we will change the format that we are returning our date from our API. So we will change the query in our API for `GET /members/:member_id`
```js
// index.js
var myQuery = " SELECT member_id, fullname, DATE_FORMAT(birthday, '%Y-%m-%d') as birthday, ranking, " +
                " gender, email, created_date, modified_date " +
                " FROM member " +
                " WHERE member_id = ? ";
```


## More about the `*ngIf` directive

`*ngIf` shows/hides an HTML element depending on the value of a variable. For example, let's create a variable in our `members-table.component.ts`:

```typescript
export class MembersTableComponent implements OnInit {
  flag = true;

  ...
}
```

We can use that variable in our code to decide when to show the table in `members-table.component.html`:


```html
<table *ngIf="flag">
  <tr>
    <th>Full name</th>
    <th>Birthday</th>
    <th>Email</th>
  </tr>
  <tr *nitem of members">
    <td>{{item.fullname}}</td>
    <td>{{item.birthday}}</td>
    <td>francisco@vilchez.com</td>
  </tr>
</table>
```

If we set the `flag` variable to `false`, the `<table>` will never show up.

That way, we can use `ngIf` in order to display the table only if the `members` variable has data in it.

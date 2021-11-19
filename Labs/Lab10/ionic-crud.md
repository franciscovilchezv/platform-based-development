# Ionic CRUD

Let's create the same functionalities we have in the Angular project:

- List members (already DONE)
- View a member details
- Create a member
- Update a member
- Delete a member

## View a member

Let's view a member when the user clicks on it in the list. In order to keep all the members logic inside the members folder, let's create the member-view component inside of it.

```
ionic generate page members/members-view
```

As you can see, the new path was added automatically in the `members-routing.module.ts` file.

Let's change the value it has in the routing by default:

```ts
{
    path: 'view/:member_id',
    loadChildren: () => import('./members-view/members-view.module').then( m => m.MembersViewPageModule)
  }
```

And the item in the `members.page.html` routerLink

```html
<ion-item *ngFor="let member of members" [routerLink]="['/members/view', member.member_id]">
  <ion-label>
    {{member.fullname}}
  </ion-label>
</ion-item>
```

We include the [same logic](https://github.com/franciscovilchezv/platform-based-development/blob/main/Labs/Lab6/crud_angular.md#view-data-of-a-chess-member) for accessing the API.

In Ionic, the framework will try to cache as much as it can. Because of that, we want to make sure data gets refreshed everytime. So, we will fetch the data in `ionViewWillEnter` instead of `ngOnInit`, following the [Ionic life cycle](https://ionicframework.com/docs/angular/lifecycle):

```ts
ionViewWillEnter(): void {
    this.memberService.getMembers().subscribe(data => {
      this.members = data;
    })
  }
```

Finally, the only thing that will change is the way we show the data.

```html
<ion-header>
  <ion-toolbar>
    <ion-title *ngIf="member">{{member.fullname}}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title *ngIf="member" size="large">{{member.fullname}}</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-grid *ngIf="member">
    <ion-row>
      <ion-col>
        <div class="ion-text-center">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Fidelogo.svg/1920px-Fidelogo.svg.png"/>
          <p>Rating: {{member.ranking}}</p>
          <p>Email: {{member.email}}</p>
          <p>Birthday: {{member.birthday | date}}</p>
          <p>Member since: {{member.created_date | date}}</p>
        </div>
      </ion-col>
    </ion-row>
    
  </ion-grid>

</ion-content>
```

## Create a member

Let's create a member when the user presses a `+` icon in the top left of the screen.

```
ionic generate page members/members-create
```

And let's rename the default route in the `members-routing`

```ts
{
  path: 'create',
  loadChildren: () => import('./members-create/members-create.module').then( m => m.MembersCreatePageModule)
  }
```

We add the [icon](https://ionic.io/ionicons?_gl=1*2kunco*_ga*MTU4MjA3MDc3Mi4xNjMwOTcxNzY1*_ga_REH9TJF6KF*MTYzNjY3NzE3MS4yOS4xLjE2MzY2NzcyMTIuMA..) in the [toolbar](https://ionicframework.com/docs/api/toolbar).

```html
<!--members.page.html-->
<ion-header>
  <ion-toolbar>
    <ion-title>Members</ion-title>
    <ion-buttons slot="end">
      <ion-button routerLink="create">
        <ion-icon slot="icon-only" name="add-outline"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```

We will create a `form` and add some [inputs](https://ionicframework.com/docs/api/input). We will apply the same logic that we used in Angular with the `form-groups` to get the data from the form.

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="members"></ion-back-button>
    </ion-buttons>
    <ion-title>Add member</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>

  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Add member</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-grid>
    <ion-row>
      <ion-col>
        <form [formGroup]="membersForm" (ngSubmit)="addChessMember(membersForm.value)">
          <ion-item>
            <ion-label position="floating">Full name</ion-label>
            <ion-input formControlName="fullname" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Birthday</ion-label>
            <ion-datetime formControlName="birthday"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Ranking</ion-label>
            <ion-input formControlName="ranking" type="number"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Gender</ion-label>
            <ion-input formControlName="gender" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">E-mail</ion-label>
            <ion-input formControlName="email" type="text"></ion-input>
          </ion-item>
          <ion-row>
            <ion-col class="ion-text-center">
              <ion-button expand="full" type="submit">Create</ion-button>
            </ion-col>
          </ion-row>
          
        </form>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>

```

We need to import this module whenever we use FormGroups

```ts
import { ReactiveFormsModule } from '@angular/forms';

// ...

@NgModule({
  imports: [
    // ...
    ReactiveFormsModule
  ]
  // ...
})
```

## Edit a member

```
ionic generate page members/members-edit
```

```ts
{
  path: 'edit/:member_id',
  loadChildren: () => import('./members-edit/members-edit.module').then( m => m.MembersEditPageModule)
}
```

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="members"></ion-back-button>
    </ion-buttons>
    <ion-title>members-edit</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">members-edit</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-grid>
    <ion-row>
      <ion-col>
        <form [formGroup]="membersForm" (ngSubmit)="saveChessMember(membersForm.value)">
          <ion-item>
            <ion-label position="floating">Full name</ion-label>
            <ion-input formControlName="fullname" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Birthday</ion-label>
            <ion-datetime formControlName="birthday"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Ranking</ion-label>
            <ion-input formControlName="ranking" type="number"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Gender</ion-label>
            <ion-input formControlName="gender" type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">E-mail</ion-label>
            <ion-input formControlName="email" type="text"></ion-input>
          </ion-item>
          <ion-row>
            <ion-col class="ion-text-center">
              <ion-button expand="full" type="submit">Save</ion-button>
            </ion-col>
          </ion-row>
        </form>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>

```

## Delete a member

```
ionic generate page members/members-delete
```

```ts
{
  path: 'delete/:member_id',
  loadChildren: () => import('./members-delete/members-delete.module').then( m => m.MembersDeletePageModule)
}
```

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="members"></ion-back-button>
    </ion-buttons>
    <ion-title>Delete a member</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Delete a member</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-grid>
    <ion-row>
      <ion-col>
        <p>This action can't be undone, so please, verify that you know what you are doing before confirming or clicking the button below. Are you sure you want to delte the member {{member_id}}?.</p>
      </ion-col>
    </ion-row>
    <ion-row>            
      <ion-col>
        <ion-button expand="full" color="dark" [routerLink]="['/members/view', member_id]" routerDirection="back">No</ion-button>
      </ion-col>
      <ion-col>
        <ion-button expand="full" color="danger" (click)="deleteMember(member_id)">Yes</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
```

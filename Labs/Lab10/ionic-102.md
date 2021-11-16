# Ionic 102

In this section, we will add some content to our app.

## Lists

Let's create a [list](https://ionicframework.com/docs/api/list) in which we will store all the chess members. Let's include it in the `members.page.html`

## Services

[Same as we did in our angular project](https://github.com/franciscovilchezv/platform-based-development/blob/feat/5-ionic-intro/Labs/Lab4/webapp_101.md#making-an-http-call-from-the-ui), let's create a service which will be in charge of accessing our API.

```
ionic generate service _services/members
```

After we followed the same steps for accessing the API, we can show it in our list inside the [label](https://ionicframework.com/docs/api/label), which is inside the [item](https://ionicframework.com/docs/api/item).

The label supports to include HTML, so we can get something like this:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Members</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Members</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-list>
    <ion-item *ngFor="let member of members">
      <ion-label>
        {{member.fullname}}
      </ion-label>
    </ion-item>
  </ion-list>

</ion-content>

```

```ts
ngOnInit() {
  this.membersService.getMembers().subscribe(data =>{
    this.members = data;
  })
}
```

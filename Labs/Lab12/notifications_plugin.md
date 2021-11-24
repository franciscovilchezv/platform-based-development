# Local Notifications

In this guide, we will learn how to use the [Local Notifications](https://capacitorjs.com/docs/apis/local-notifications) plugin with Capacitor.

You can use Ionic Live Reload feature for testing your plugins in a [mobile device](https://ionicframework.com/docs/angular/your-first-app/7-live-reload).

## Goal

Send a notification at a specific time. Let's say we want to send a notification a few seconds after a new member is added.

## Capacitor Plugin

```
npm install @capacitor/local-notifications --save
```

In `main.ts`:

```ts
import { LocalNotifications } from '@capacitor/local-notifications';

LocalNotifications.requestPermissions()
```

In `member-create.page.ts`:

```ts
LocalNotifications.schedule({
  notifications: [
    {
      id: new Date().getTime(),
      title: "New member",
      body: `${values.fullname} is a new member. Don't forget to welcome him`,
      schedule: {
        at: new Date(new Date().getTime() + 10000)
      }
    }
  ]
})
```
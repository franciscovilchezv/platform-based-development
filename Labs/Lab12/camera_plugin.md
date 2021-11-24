# Camera

In this session, we will learn how to use the [Camera plugin](https://capacitorjs.com/docs/apis/camera) with Capacitor.

## Goal

Let's imagine that we want to allow the user to take a picture of the new member while adding them to the club. We will use the Camera plugin for oing this.

## Preparation

At this moment, we are not storing the picture of the user. Let's add a field in the DB where we will store the location of the picture that we are taking.

### MySQL

```sql
USE my_chess_club;

-- Add the new column for the picture url

ALTER TABLE member
ADD COLUMN picture_url VARCHAR(255) AFTER email;
```

### NodeJS

We will just add the `picture_url` field to all our current services, specifically:

- `GET /members/:member_id`

```js
var myQuery = " SELECT member_id, fullname, DATE_FORMAT(birthday, '%Y-%m-%d') as birthday, ranking, " +
              " gender, email, picture_url, created_date, modified_date " +
              " FROM member " +
              " WHERE member_id = ? ";
```

- `GET /members`

```js
var myQuery = " SELECT member_id, fullname, birthday, ranking, " +
              " gender, email, picture_url, created_date, modified_date " +
              " FROM member " +
              " WHERE 1 = 1";
```

- `POST /members`

```js
var myQuery = " INSERT INTO member (fullname, birthday, ranking, " +
              " gender, email, picture_url, created_date, modified_date ) " +
              " VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW()); ";

var myValues = [req.body.fullname, req.body.birthday, req.body.ranking, req.body.gender, req.body.email, req.body.picture_url ];
```

- `PUT /members`

```js
if (req.body.picture_url){
  myQuery += " , picture_url = ? ";
  myValues.push(req.body.picture_url);
}
```

### Ionic

We will include the `picture_url` in our pages:

- `members-view`

```html
<img *ngIf="member.picture_url" [src]="'http://192.168.0.126:3000/' + member.picture_url"/>
```

We will later learn a more fancy way to include the hostname in all our project.

- `members-create`

```html
<ion-item>
  <ion-label position="floating">Picture URL</ion-label>
  <ion-input formControlName="picture_url" type="url"></ion-input>
</ion-item>
```

```ts
this.membersForm = this.formBuilder.group({
  fullname: [''],
  birthday: [''],
  ranking: [''],
  gender: [''],
  email: [''],
  picture_url: ['']
});
```

- `members-edit`

```html
<ion-item>
  <ion-label position="floating">Picture URL</ion-label>
  <ion-input formControlName="picture_url" type="url"></ion-input>
</ion-item>
```

```ts
this.membersForm = this.formBuilder.group({
  id: [''],
  fullname: [''],
  birthday: [''],
  ranking: [''],
  gender: [''],
  email: [''],
  picture_url: ['']
});
```

## Capacitor Plugin

```
npm install @capacitor/camera --save
```

```
ionic g service _services/photo
```

We add the following content

```ts
import { HttpClient } from '@angular/common/http';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

// ...

constructor(
  private http: HttpClient
) { }

uploadPicture(data) {
  return this.http.post<any>('http://192.168.0.126:3000/figures', data).toPromise()
}

async takePicture() {
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Base64, 
    source: CameraSource.Camera, 
    quality: 100,
    allowEditing: true
  });

  const response = await this.uploadPicture({picture: capturedPhoto.base64String})
  
  return response;
}
```

In the `members-create.page.html` and `members-edit.page.html`:

```html
<ion-item>
  <ion-label position="floating">Picture URL</ion-label>
  <ion-input formControlName="picture_url" type="url"></ion-input>
  <ion-icon name="camera-outline" slot="end" (click)="openCamera()"></ion-icon>
</ion-item>
```

In the `members-create.page.ts` and `members-edit.page.ts`:

```ts
async openCamera() {
  const picture_data = await this.photoService.takePicture();
  
  this.membersForm.patchValue(picture_data);
}
```

If you want to test in your browser some plugins, you need to include the [PWA Elements](https://capacitorjs.com/docs/web/pwa-elements#importing-pwa-elements).

Don't forget to include the permissions in the [configuration file](https://capacitorjs.com/docs/apis/camera#ios) for your Android or iOS project if you are testing it in a Device. Camera functionality is usually not available for testing in simulator.

```js
var fs = require("fs");

var picturesDirectory = 'figures/';

app.use(express.json({limit: '50mb'}));

app.post('/figures', function(req, res){
  var fileName = `${new Date().getTime()}.jpeg`;
  var picture_url = `${picturesDirectory}${fileName}`;

  fs.writeFile(`${picture_url}`, req.body.picture, 'base64', function(error) {
    if (error) throw error;

    res.send({picture_url: picture_url});
  });
})

app.use('/figures', express.static('figures'))
```
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private http: HttpClient
  ) { }

  uploadPicture(data) {
    return this.http.post<any>(`${environment.apiUrl}/figures`, data).toPromise()
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
}

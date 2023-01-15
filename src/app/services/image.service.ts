import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = '';

  constructor(private storage: Storage) { }

  public uploadImg($event: any, name: string){
    const file = $event.target.files[0];
    //console.log("image: ", file);
    const imgRef = ref(this.storage, `image/` + name);

    uploadBytes(imgRef, file)
    .then(response => {
      this.getImage()
    })
    .catch(error => {
      console.log(error);
    });
  }

  getImage(){
    const imageRef = ref(this.storage, 'image');
    list(imageRef)
    .then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
        //console.log("la url es: ", this.url);
        
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
}
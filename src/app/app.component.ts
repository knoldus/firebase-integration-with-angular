import {Component} from '@angular/core';

import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) {
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    if (file.size > 100000) {
      alert("File is too big!");
      return;
    }
    const filePath = id;
    const fileRef = this.storage.ref(filePath);

    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    )
      .subscribe()
  }
}

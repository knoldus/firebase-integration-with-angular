import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {Ng2FileSizeModule} from "ng2-file-size";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //configuration object
    AngularFireModule.initializeApp({
      apiKey: "Enter apiKey from firebase",
      authDomain: "Enter authDomain from firebase",
      projectId: "Enter projectId from firebase",
      storageBucket: "Enter storageBucket from firebase",
    }),
    AngularFireStorageModule,
    Ng2FileSizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

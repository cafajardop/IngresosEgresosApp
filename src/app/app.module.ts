import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//NRXS
import { StoreModule} from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//Charts

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Modulos
import { AppRoutingModule } from './app-routing.module';

// Formularios Reactivos
import { FormsModule } from '@angular/forms'

import { environment } from 'src/environments/environment';
import { appReducers } from './app.reducer';

//Módulos
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    //Modularizacion
    AuthModule,

    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(appReducers),
    
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

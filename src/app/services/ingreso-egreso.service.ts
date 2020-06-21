import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(private firestore:  AngularFirestore,
              private authService: AuthService ) { }

  crearIngresoEgreso(ingresoEgreso: IngresoEgreso){
    // TODO: Creamos el servicio e instanciamos AngularFirestore
      const uid = this.authService.user.uid
      return this.firestore.doc(`${ uid }/ingresos-egresos`)
          .collection('items')
          .add({ ...ingresoEgreso})
  }

  initIngresosEgresosListener(uid: string){
    this.firestore.collection(`${ uid }/ingresos-egresos/items`)
      .snapshotChanges()
      .pipe(
        map(snapshot => {
          return snapshot.map( doc => {
            return{
              uid: doc.payload.doc.id,
              ...doc.payload.doc.data() as any
            }
          })
        })
      )
      .subscribe(algo =>{
        console.log(algo);
      })
  }
}

# Funcionamiento Aplicacion
| Crear el proyecto de Angular |
| ------------- |
| Manejo de la estructura de carpetas|
| Implementar las rutas y las rutas hijas|
| Diseñar las pantallas de la aplicación|
| Convertir un template a una aplicación de Angular|
| El objetivo primordial, es tener un cascaron que nos sirva para trabajar de una forma muy parecida a la realidad, a la cual nos enfrentaremos cuando implementemos este patrón en la empresa|

| Creacion de componentes |
| ------------- |
| ng g c auth/login --skipTests -is|
| ng g c auth/register --skipTests -is|
| ng g c dashboard --skipTests -is|
| ng g c ingreso-egreso --skipTests -is|
| ng g c ingreso-egreso/estadistica --skipTests -is|
| ng g c ingreso-egreso/detalle --skipTests -is|
| ng g c shared/footer --skipTests -is|
| ng g c shared/navbar --skipTests -is|
| ng g c shared/sidebar --skipTests -is|
| ng g s services/auth --skipTests|
| ng g guard services/auth --skipTests|

## Sección 2

| Creacion de Tags |
| ------------- |
| git tag -a v1.0.0 -m "Template Listo"|


| Autenticación de nuestra aplicación |
| ------------- |
| Aquí vamos a cubrir temas interesantes como:|
| Firebase|
| AngularFire2|
| AngularFireAuth|
| Backend y autorizaciones|
| Login|
| Register|
| Sweetalert|
| Logout|
| Grabar un documento en Firebase|

| Instalación AngularFire |
| ------------- |
| npm install angularfire --save|
| ng add @angular/fire@next |
| https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md|


| Solución Error angular Fire |
| ------------- |
| https://stackoverflow.com/questions/61130173/angular9-error-in-the-target-entry-point-angular-fire-auth-has-missing-depen|
| "firebase": "^7.13.2",|
| package.json:| 

## Sección 3
| Instalación AngularFire |
| ------------- |
| Esta sección tiene por objetivo enseñar y repasar cosas como:|
| Crearemos nuestro primer reducer y acciones para controlar el estado de la interfaz de usuario|
| ActionReducerMap|
| Dispatch de acciones de UI|
| Acciones del Auth|
| Reducer del Auth|

| Snippets personalizados con Gits|
| ------------- |
| https://gist.github.com/Klerith/e6cb4f984cf1bc9c1f2e99b5f5509b7f|


| Instalacion ngrx :|
| ------------- |
| npm install @ngrx/store|

## Sección 4
| Instalación AngularFire |
| ------------- |
| Crear modelo de Ingresos y Egresos |
| Pantallas de captura de datos |
| Servicio de Ingreso Egreso |
| Loadings |
| Acciones y Reducer de Ingresos y Egresos |
| Leer de Firebase |
| Grabar a Firebase |
| Gráficas dinámicas |
| Y otras cosas |
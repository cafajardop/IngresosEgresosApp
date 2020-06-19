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


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

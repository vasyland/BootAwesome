# AbaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

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



Guide: How to use Bootstrap 4 with FontAwesome in Angular
=========================================================

1. ng new AbaApp --style=scss
   Would you like to Angular routing? Y
2. cd AbaApp
    
Install them from command window
3.	npm install bootstrap jquery popper.js –-save    - this is requried by Boootstrap
4.	npm install @fortawesome/angular-fontawesome –-save
5.	npm install @fortawesome/fontawesome-svg-core -–save
6.	npm install @fortawesome/free-solid-svg-icons -–save
7.	npm install @fortawesome/free-brands-svg-icons -–save
8.	npm install @fortawesome/free-regular-svg-icons -–save

9. Create folder under \src\scss
   In angular.json change path to the scss folder
	"styles": [
              "src/scss/styles.scss"
            ],

10. create a file in src\scss\_variables.scss

11. Add the following into _variables.scss 
	$font-color: green;  
	$background-color:rgb(228, 240, 235); 
	$other-color: #f76464;
	
12. Move styles.scss file from \src into src\scss folder

13. add the following into styles.scss. It is aka customization of styles.
    Note, we put reference to bootstrap.scss which can be found under \node_modules\....

	@import '~bootstrap/scss/bootstrap.scss';
	@import '_variables';

	body {
		background-color: $background-color;
	}
	
14. Add imports into app.moduls.ts file
	import { FormsModule } from "@angular/forms";
	import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
    and add into imports under @NgModule
    imports: [BrowserModule, FormsModule, FontAwesomeModule],
	
15. Add imports into app.component.ts the following
	import { faCoffee } from '@fortawesome/free-solid-svg-icons';
	import { library } from '@fortawesome/fontawesome-svg-core';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import { far } from '@fortawesome/free-regular-svg-icons';
	import { fab } from '@fortawesome/free-brands-svg-icons';
	import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
	import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons';

	library.add(fas, far, fab);
	library.add(faUserAstronaut, farFaCircle);
	
	create variables as shown below. These vars will be used on your form.
	export class AppComponent {
	  title = 'template-forms';
	  faCoffee = faCoffee;
  	  faUserAstronaut = faUserAstronaut;
          farFaCircle = farFaCircle;
	}
	

    16. To make your application working in IE 11 find a file polyfills.ts using Ctrl+P
        and uncomment section /** IE9, IE10 and IE11 requires all of the following polyfills. **/
        

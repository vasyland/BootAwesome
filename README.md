# Angular + Bootstrap 4 + Font Awesome

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Running on a laptop
```bash
git clone https://github.com/vasyland/BootAwesome.git
cd into project
npm install
ng serve
```


## Guide: How to use Bootstrap 4 with FontAwesome in Angular
```bash
ng new AbaApp --style=scss
   Would you like to Angular routing? Y
cd AbaApp
```

## Install them from command window
```bash
npm install bootstrap jquery popper.js –-save    - this is requried by Boootstrap
npm install @fortawesome/angular-fontawesome –-save
npm install @fortawesome/fontawesome-svg-core -–save
npm install @fortawesome/free-solid-svg-icons -–save
npm install @fortawesome/free-brands-svg-icons -–save
npm install @fortawesome/free-regular-svg-icons -–save
```

## Create folder under \src\scss

   In angular.json change path to the scss folder
```javascript
	"styles": [
              "src/scss/styles.scss"
            ],
```
## create a file in src\scss\_variables.scss

## Add the following into _variables.scss 
```javascript
	$font-color: green;  
	$background-color:rgb(228, 240, 235); 
	$other-color: #f76464;
```

## Move styles.scss file from \src into src\scss folder

## add the following into styles.scss. It is aka customization of styles.

    Note, we put reference to bootstrap.scss which can be found under \node_modules\....
```javascript
	@import '~bootstrap/scss/bootstrap.scss';
	@import '_variables';
	body {
		background-color: $background-color;
	}
```

## Add imports into app.moduls.ts file
```javascript
	import { FormsModule } from "@angular/forms";
	import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

    and add into imports under @NgModule

    imports: [BrowserModule, FormsModule, FontAwesomeModule],
```
	

## Add imports into app.component.ts the following
```javascript
	import { faCoffee } from '@fortawesome/free-solid-svg-icons';
	import { library } from '@fortawesome/fontawesome-svg-core';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import { far } from '@fortawesome/free-regular-svg-icons';
	import { fab } from '@fortawesome/free-brands-svg-icons';
	import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
	import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons';

	library.add(fas, far, fab);
	library.add(faUserAstronaut, farFaCircle);
	
	//create variables as shown below. These vars will be used on your form.

	export class AppComponent {
	  title = 'template-forms';
	  faCoffee = faCoffee;
  	  faUserAstronaut = faUserAstronaut;
      farFaCircle = farFaCircle;
	}
```	
    
To make your application working in IE 11 find a file polyfills.ts using Ctrl+P
and uncomment section /** IE9, IE10 and IE11 requires all of the following polyfills. **/

## Git goodies
https://www.onwebsecurity.com/configuration/git-on-windows-location-of-global-configuration-file.html
git config --list --local

    


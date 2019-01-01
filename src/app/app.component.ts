import { Component } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
	import { library } from '@fortawesome/fontawesome-svg-core';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import { far } from '@fortawesome/free-regular-svg-icons';
	import { fab } from '@fortawesome/free-brands-svg-icons';
	import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
	import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons';

	library.add(fas, far, fab);
  library.add(faUserAstronaut);
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AbaApp';
  faCoffee = faCoffee;
  faUserAstronaut = faUserAstronaut;
}

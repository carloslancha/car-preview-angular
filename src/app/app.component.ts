import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	car = {
		description: 'Awesome car caption',
		name: 'Car Name',
		image: 'https://www.audi.es/content/dam/nemo/models/r8/r8-coupe-v10-quattro/my-2019/1920-stage/1920x600_AR8_181012.jpg',
		parts: [
			{
				description: `Amazing detail about the wheels`,
				name: 'Wheels',
				x: '30.4%',
				y: '68%'
			},
			{
				description: `Amazing detail about the emissions`,
				name: 'Emissions',
				x: '81.4%',
				y: '68%'
			},
			{
				description: `Amazing detail about the brakes`,
				name: 'Brakes',
				x: '72%',
				y: '57%'
			},
			{
				description: `Amazing detail about the lights`,
				name: 'Lights',
				x: '21.4%',
				y: '57%'
			}
		]
	}
}

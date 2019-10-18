import { Component, Input, OnInit } from '@angular/core';

class CarPart {
	description: string;
	name: string;
	x: number;
	y: number;
}

@Component({
	selector: 'app-car-preview',
	templateUrl: './car-preview.component.html',
	styleUrls: ['./car-preview.component.css']
})
export class CarPreviewComponent {
	@Input() carName: String;
	@Input() carDescription: String;
	@Input() carPicture: String;
	@Input() carParts: Array<Object>;

	activePart: String;
	showInfo: boolean;

	handlePointMouseEnter(carPart) {
		this.activePart = carPart;
		this.showInfo = true;
	}
	
	handlePointMouseLeave() {
		console.log('si');
		this.showInfo = false;
	}
}

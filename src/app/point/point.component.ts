import { Component, Input } from '@angular/core';

@Component({
	selector: 'point',
	templateUrl: './point.component.html',
	styleUrls: ['./point.component.css']
})
export class PointComponent {
	@Input() color: String = '#4949ff';
	@Input() x: String;
	@Input() y: String;
}
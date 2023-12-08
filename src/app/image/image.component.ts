import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
	selector: 'app-image',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './image.component.html',
	styleUrl: './image.component.css',
})
export class ImageComponent {}

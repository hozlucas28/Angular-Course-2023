import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ImageComponent } from '../image/image.component'

@Component({
	selector: 'app-articles',
	standalone: true,
	imports: [CommonModule, ImageComponent],
	templateUrl: './articles.component.html',
	styleUrl: './articles.component.css',
})
export class ArticlesComponent {}

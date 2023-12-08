import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ArticlesComponent } from './articles/articles.component'
import { UserComponent } from './user/user.component'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, UserComponent, ArticlesComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {}

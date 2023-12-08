import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { GamesComponent } from '../games/games.component'

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [CommonModule, GamesComponent],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css',
})
export class UserComponent {
	favoritieGame = ''
	isLogged = true
	userName = 'Lucas Hoz'

	greet() {
		alert('Hello ' + this.userName)
	}

	getSelectedFavoriteGame(game: string) {
		this.favoritieGame = game
	}
}

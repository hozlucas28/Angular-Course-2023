import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
	selector: 'app-games',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './games.component.html',
	styleUrl: './games.component.css',
})
export class GamesComponent {
	@Input() userName = ''
	@Output() selectFavoriteGameEvent = new EventEmitter<string>()

	games = [
		{
			id: 1,
			name: 'Super Mario',
		},
		{
			id: 2,
			name: 'Grand Theft Auto',
		},
		{
			id: 3,
			name: 'Call of Duty',
		},
	]

	selectFavoriteGame(game: string) {
		this.selectFavoriteGameEvent.emit(game)
	}
}

export type TPlayer = {
	name: string,
	age: number,
}
export type TTeam = {
	team_name: string,
	players: Array<TPlayer>
}
export type TGame = {
	game: string,
	teams: Array<TTeam>
}
export type TTournament = Array<TGame>

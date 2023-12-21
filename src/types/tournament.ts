export type TPlayer = {
	name: string,
	age: string,
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

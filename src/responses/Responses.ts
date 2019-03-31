export type TOP = Array<string>;

export interface Player {
	rank: string;
	timePlayed: string;
	games: Array<Game>;
}

export interface Stat {
	Points: string;
	Wins: string;
	Played: string;
	Deaths?: string;
	Eggs?: string;
	Blocks?: string;
	Kills?: string;
	FireWorks?: string;
	Crates?: string;
	DMs?: string;
	Sponges?: string;
	Beds?: string;
	Rounds?: string;
	Goals?: string;
}

interface Game {
	game: string;
	stats: Stat;
}

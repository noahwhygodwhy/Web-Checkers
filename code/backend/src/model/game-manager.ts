import { Game } from '../../../shared/models/game'

export class GameManager
{
    games:Game[];
    constructor()
    {
        this.games = new Array<Game>();
    }
    getPlayerList()
    {
        return this.games;
    }
}
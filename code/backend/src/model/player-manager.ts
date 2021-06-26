import { Player } from '../../../shared/models/player'

export class PlayerManager
{
    players:Player[];
    constructor()
    {
        this.players = new Array<Player>();
    }
    getPlayerList()
    {
        return this.players;
    }
}
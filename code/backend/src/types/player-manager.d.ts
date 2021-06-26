import { PlayerManager } from '../model/player-manager'
import { GameManager } from '../model/game-manager'

declare global {
    namespace Express {
        export interface Request {
        playerManager?: PlayerManager;
        gameManager?:GameManager;
        }
    }
}
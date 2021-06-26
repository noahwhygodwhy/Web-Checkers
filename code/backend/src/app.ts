import express from "express"
import cors from "cors";
import {apiRouter} from "./routes/index"
import { PlayerManager } from './model/player-manager'
import { GameManager } from "./model/game-manager";
import { Player } from "../../shared/models/player";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page




const playerManager = new PlayerManager();
const gameManager = new GameManager();

app.use((req:express.Request, res:express.Response, next:express.NextFunction) => {
    playerManager.players.push(new Player(Date.now().toString()));
    req.playerManager = playerManager;
    req.gameManager = gameManager;
    next();
})
app.use('/api', cors({origin:"http://localhost:4200", optionsSuccessStatus:200}), apiRouter)

app.get( "/", ( req:express.Request, res:express.Response ) => {
    res.send( "Whachu doing accessing the backend? You're looking for port 4200 not 8080 :P" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
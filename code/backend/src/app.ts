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




// app.use((req, res, next)=>{
//     res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent');
//     if(req.method === 'OPTIONS') {
//         res.sendStatus(204);
//     }
//     else {
//         next();
//     }
// })
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// app.use(cors({
//     origin: ['http://localhost:4200'],
//     credentials: true
// }));
app.use('/api', apiRouter)
app.use((req, res, next) => {
    req.playerManager.players.push(new Player(Date.now().toString()));
    req.playerManager = playerManager;
    req.gameManager = gameManager;
    next();
})

app.get( "/", ( req:express.Request, res:express.Response ) => {
    res.send( "Whachu doing accessing the backend? You're looking for port 4200 not 8080 :P" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
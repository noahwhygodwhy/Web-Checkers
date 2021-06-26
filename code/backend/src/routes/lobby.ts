import express from "express"
const router = express.Router();

router
    .get("/playerlist", async (req:express.Request, res:express.Response)=>{
        res.send(req.playerManager.getPlayerList())
    })

export const lobbyRouter = router;
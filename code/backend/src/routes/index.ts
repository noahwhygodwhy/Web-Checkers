import express from "express"
import { lobbyRouter } from "./lobby";

const router = express.Router();


router.use("/lobby", lobbyRouter);

export const apiRouter = router;
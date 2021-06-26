import { Injectable } from '@angular/core';
import { Player } from '../../../../shared/models/player'
import { Game } from '../../../../shared/models/game'
import axios from 'axios'


const baseURL = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor() {

  }
  getPlayerList():Promise<Array<Player>> {
    console.log("getting player list");
    return axios.get(baseURL + "/api/lobby/playerlist" )
  }  
  getGameList():Promise<Array<Game>> {
    return axios.get(baseURL + "/api/lobby/gamelist")
  }

}

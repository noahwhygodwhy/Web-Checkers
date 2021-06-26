import { Injectable } from '@angular/core';
import { Player } from '../../../../shared/models/player'
import { Game } from '../../../../shared/models/game'
import axios from 'axios'
import { AxiosResponse } from 'axios';


const baseURL = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor() {

  }
  getPlayerList():Promise<AxiosResponse<Array<Player>>>  {
    console.log("getting player list");
    return axios.get(baseURL + "/api/lobby/playerlist" )
  }  
  getGameList():Promise<AxiosResponse<Array<Game>>> {
    return axios.get(baseURL + "/api/lobby/gamelist")
  }

}

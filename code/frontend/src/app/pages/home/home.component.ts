import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LobbyService } from 'src/app/services/lobby.service';
import { Game } from '../../../../../shared/models/game';
import { Player } from '../../../../../shared/models/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private updateSubscription: Subscription;

  playerTableColumns = ['name']

  playerList: Array<Player>;
  gameList: Array<Game>;


  constructor( private lobbyService:LobbyService) {
    this.updateSubscription = interval(10000).subscribe(()=>this.refresh())
    this.playerList = new Array<Player>();
    this.gameList = new Array<Game>();
  }


  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.lobbyService.getPlayerList().then((e)=>{this.playerList = e.data;});
  }

  titleCase(str:string):string {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
}

import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private updateSubscription: Subscription;
  playerList: Array<string>;
  gameList: Array<Object>;


  constructor( private lobbyService:LobbyService) {
    this.updateSubscription = interval(10000).subscribe(()=>this.refresh())
    this.playerList = new Array<string>();
    this.gameList = new Array<Object>();
  }


  ngOnInit(): void {
    this.refresh();
  }

  refresh()
  {
    this.lobbyService.getPlayerList().then((e)=>{console.log(e)});
  }
}

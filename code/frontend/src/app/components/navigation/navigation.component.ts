import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() navAction:EventEmitter<Object> = new EventEmitter<Object>();
  constructor() { }

  ngOnInit(): void {

  }
  newGame()
  {
    this.navAction.emit({action:"newGame"})
  }

}

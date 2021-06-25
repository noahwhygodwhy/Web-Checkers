import { OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  nameFormControl:FormControl;

  constructor() {
    this.nameFormControl = new FormControl('');
  }

  ngOnInit(): void { }
}

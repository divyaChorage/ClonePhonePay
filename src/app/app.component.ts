import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phonepay';
  
  WhatToShow:number=1;
  id:number=0;
  baseUrl='http://localhost:9090/'

  
}

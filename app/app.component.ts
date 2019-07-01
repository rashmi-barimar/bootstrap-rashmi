import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cards = [{name: "Chris",
  phone: "(927) 123-4567",
  smallText: "Apple iPhone 7 32 Gold" },
  { name: "Benjamin",
  phone: "(927) 765-6589",
  smallText: "Apple iPhone 8 64 Gold" 
  },
  { name: "Anabelle",
  phone: "(927) 765-1122",
  smallText: "Samsung Galaxy S9 Plus Lilac" 
  },
  { name: "Donald",
  phone: "(927) 765-1122",
  smallText: "Samsung Galaxy S10 Plus Black" 
  }]; 
  
}

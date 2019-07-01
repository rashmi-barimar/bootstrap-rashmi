import { Component, Input } from '@angular/core';
@Component({
  selector: 'blade',
  template: `
              
                <div class="card h-100">
                  <div class="row">
                    <div class="col-sm-9">
                      <div class="card-body">
                        <h2 class="card-title">{{customerDetails.name}}</h2>
                        <p class="card-text lineheight">{{customerDetails.phone}}</p>
                        <p class="card-text lineheight2"><small class="text-muted">{{customerDetails.smallText}}</small></p>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <img [src]="'assets/phone_3.jpg'">      
                    </div>
                  </div>
                </div>
              
            `
})
export class BladeComponent{
  // constructor(private ds: DataService){
    
  // }
  @Input('customerDetails') customerDetails;
  
}
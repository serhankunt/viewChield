import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './childComponent/child.component';

@Component({
  selector: 'app-root',
  template:` 
  <button (click)="increment()">İncrement</button>
  <button (click)="decrement()">Decrement</button>
  <p>Geçerli Sayı: {{childrenComponent.count}}</p>
  <app-child>#childComponent</app-child>
  <app-child>#childComponent</app-child>
  `
  ,

})
export class AppComponent {
  
@ViewChild(ChildComponent,{static:true}) childrenComponent:ChildComponent

  increment(){
    this.childrenComponent.increment();
  }
  decrement(){
    this.childrenComponent.decrement();
  }

  
 
}

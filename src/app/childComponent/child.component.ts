import { Component } from '@angular/core';
 
@Component({
  selector: 'app-child',
  template: `
  <h4>Child Component</h4>
  <h4>Geçerli sayi : {{count}}</h4>
  `
})
export class ChildComponent {
 
  count = 0;
 
  increment() {
    this.count++;
  }
 
  decrement() {
    this.count--;
  }
 
}
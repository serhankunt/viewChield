import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2TestComponent } from './test2-test/test2-test.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './childComponent/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2TestComponent,
    ChildComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

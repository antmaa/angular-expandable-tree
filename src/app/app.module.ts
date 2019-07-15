import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BranchComponent } from './components/branch.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule ],
  declarations: [ AppComponent, HelloComponent, BranchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootContainer } from '../containers/root.container/root.container';
import { NavbarComponent } from "../components/navbar.component/navbar.component";

@NgModule({
  declarations: [
    RootContainer,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootContainer]
})
export class RootModule { }

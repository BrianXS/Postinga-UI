import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootContainer } from '../containers/root.container/root.container';
import { NavbarComponent } from "../components/navbar.component/navbar.component";
import { HomeLeftSidebarComponent } from "../components/home.left.sidebar/home.left.sidebar.component"
import { RecentPostComponent } from "../components/recent.post/recent.post.component";
import { HomeRightSidebarComponent } from "../components/home.right.sidebar/home-right-sidebar-component";
import { StatsComponent } from "../components/stats/stats.component";
import { UserRankingComponent } from "../components/user.ranking/user.ranking.component";
import { UserEntryComponent } from "../components/user.entry/user.entry.component";

@NgModule({
  declarations: [
    RootContainer,
    NavbarComponent,
    HomeLeftSidebarComponent,
    RecentPostComponent,
    HomeRightSidebarComponent,
    StatsComponent,
    UserRankingComponent,
    UserEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootContainer]
})
export class RootModule { }
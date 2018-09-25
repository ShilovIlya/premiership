import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PremiershipDataService } from './premiership-data.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient
  ],
  providers: [PremiershipDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

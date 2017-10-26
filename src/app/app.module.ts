import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';

import { AppComponent } from './app.component';
import { KatschingoService } from './services/katschingo.service';
import { GridComponent } from './grid/grid.component';
import { PenaltyCardComponent } from './penalty/penalty-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PenaltyCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    KatschingoService,
    BackandService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

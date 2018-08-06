import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { GnomoCardComponent } from './components/gnomo-card/gnomo-card.component';
import { GnomosService } from './services/gnomos.service';
import { GnomosComponent } from './components/gnomos/gnomos.component';

@NgModule({
  declarations: [
    AppComponent,
    GnomoCardComponent,
    GnomosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    GnomosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

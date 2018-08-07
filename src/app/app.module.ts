import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { GnomoComponent } from './components/gnomo/gnomo.component';
import { GnomosService } from './services/gnomos.service';
import { GnomosComponent } from './components/gnomos/gnomos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GnomoComponent,
    GnomosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FontAwesomeModule
  ],
  providers: [
    GnomosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

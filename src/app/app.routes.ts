import { RouterModule, Routes } from '@angular/router';
import { GnomosComponent } from './components/gnomos/gnomos.component';
import { GnomoCardComponent } from './components/gnomo-card/gnomo-card.component';

const APP_ROUTES: Routes = [
    { path: 'gnomos', component: GnomosComponent },
    { path: 'gnomo/:id', component: GnomoCardComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'gnomos' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

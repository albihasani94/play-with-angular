import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            // default route
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            // route not matches any route
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { };
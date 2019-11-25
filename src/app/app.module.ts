import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './@core/components/admin-layout/admin-layout.component';
import { StreamComponent } from './@core/components/stream/stream.component';

// Modules
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './@core/core.module';
import { SharedModule } from './@shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { environment } from '../environments/environment';
import { reducers, CustomSerializer, effects } from './@core/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    SharedModule,
		CoreModule.forRoot(),
		StoreModule.forRoot(reducers, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot(effects),
		StoreRouterConnectingModule.forRoot()
  ],
  declarations: [
    AppComponent

  ],
  entryComponents: [
		// ResetPasswordComponent,
		// ChangePasswordResetComponent,
	],
	providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
	bootstrap: [AppComponent]
})
export class AppModule { }

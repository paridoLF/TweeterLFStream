import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { SharedModule } from './../@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StreamComponent } from './components/stream/stream.component';

// services
import * as fromServices from './services';
import * as fromComponents from './components';

const SERVICES = [
 fromServices.StreamService,
];

// Components
export const BASIC_COMPONENTS = [
    fromComponents.AdminLayoutComponent,
    fromComponents.StreamComponent
];

const routes: Routes = [
    { path: '', component: StreamComponent},
];

@NgModule({
 declarations: [...BASIC_COMPONENTS,FooterComponent,NavbarComponent,SidebarComponent],
 exports: [...BASIC_COMPONENTS],
 imports: [
  NgbModule,
  CommonModule,
  SharedModule,
  RouterModule.forChild(routes)
 ],
 providers: [
  ...SERVICES
 ]
})

export class CoreModule {
 static forRoot(): ModuleWithProviders {
  return {
   ngModule: CoreModule,
   providers: [
   ...SERVICES,
   ]
  } as ModuleWithProviders;
 }
}

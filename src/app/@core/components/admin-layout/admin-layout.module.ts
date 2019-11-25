import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StreamComponent } from './../stream/stream.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import * as fromComponents from './../../components';

const routes: Routes = [
  { path: '', component: fromComponents.StreamComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    StreamComponent,
    ToastrModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [StreamComponent],
  declarations: [
    StreamComponent,
  ]
})

export class AdminLayoutModule {}

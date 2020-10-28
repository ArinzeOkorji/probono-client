import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingleCaseComponent } from './single-case/single-case.component';

const COMPONENTS = [
  SingleCaseComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule
  ],
  exports: [...COMPONENTS, FlexLayoutModule]
})
export class SharedModule { }

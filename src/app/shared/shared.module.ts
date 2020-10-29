import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingleCaseComponent } from './single-case/single-case.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  SingleCaseComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [...COMPONENTS, FlexLayoutModule, FormsModule]
})
export class SharedModule { }

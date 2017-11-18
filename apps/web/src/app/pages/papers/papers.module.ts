import { NgModule } from '@angular/core';

import { PapersRoutingModule } from './papers-routing.module';
import { PapersComponent } from './papers.component';
import { PaperListComponent } from './paper-list/paper-list.component';

@NgModule({
  imports: [
    PapersRoutingModule,
  ],
  declarations: [
    PapersComponent,
    PaperListComponent,
  ],
})
export class PapersModule { }

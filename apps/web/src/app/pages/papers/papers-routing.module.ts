import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PapersComponent } from './papers.component';
import { PaperListComponent } from './paper-list/paper-list.component';

const routes: Routes = [
  {
    path: '',
    component: PaperListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapersRoutingModule {}

import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [{
  path: '',
  loadChildren: './app-pages/app-pages.module#AppPagesModule',
  },
  { path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

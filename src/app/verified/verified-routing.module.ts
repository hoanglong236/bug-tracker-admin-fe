import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifiedLayoutComponent } from './layout/verified-layout/verified-layout.component';

const routes: Routes = [
  {
    path: '',
    component: VerifiedLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifiedRoutingModule {}

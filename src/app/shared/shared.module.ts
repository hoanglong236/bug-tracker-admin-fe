import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from './components/overlay/overlay.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

const exportComponents = [OverlayComponent, PaginatorComponent];

@NgModule({
  declarations: [OverlayComponent, PaginatorComponent],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...exportComponents,
  ],
})
export class SharedModule {}

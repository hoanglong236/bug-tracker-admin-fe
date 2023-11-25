import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OverlayComponent } from './components/overlay/overlay.component';

const exportComponents = [
  PaginatorComponent,
  SearchBarComponent,
  OverlayComponent,
];

@NgModule({
  declarations: [PaginatorComponent, SearchBarComponent, OverlayComponent],
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

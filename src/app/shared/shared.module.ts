import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

const exportComponents = [PaginatorComponent, SearchBarComponent];

@NgModule({
  declarations: [PaginatorComponent, SearchBarComponent],
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

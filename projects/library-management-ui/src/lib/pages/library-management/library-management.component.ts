import { Component } from '@angular/core';
import { BookListComponent } from '../../features/book-list/book-list.component';
import { HeaderComponent } from '../../features/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'kwp-library-management',
  standalone: true,
  imports: [BookListComponent, HeaderComponent, MatSlideToggleModule],
  templateUrl: './library-management.component.html',
  styleUrl: './library-management.component.css',
})
export class LibraryManagementComponent {}

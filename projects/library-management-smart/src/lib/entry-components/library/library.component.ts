import { Component } from '@angular/core';
import { LibraryManagementComponent } from '../../../../../library-management-ui/src/public-api';

@Component({
  selector: 'kwp-library',
  standalone: true,
  imports: [LibraryManagementComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {}

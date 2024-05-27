import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginscreenComponent } from "../loginscreen/loginscreen.component";

@Component({
    selector: 'kwp-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, LoginscreenComponent]
})
export class HeaderComponent {
  isLogin: boolean = false;
  authenticateUser(): void {
    console.log('You are authenticated');
  }
}

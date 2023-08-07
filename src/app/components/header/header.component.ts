import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavVisible: boolean = false;

  toggleNavVisibility() {
    this.isNavVisible = !this.isNavVisible;
  }
}

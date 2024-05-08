import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-base',
  standalone: true,
  imports: [CommonModule , HeaderComponent , FooterComponent , RouterModule],
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss']
})
export class HomeBaseComponent {

}

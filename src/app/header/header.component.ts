import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
@Component({
  selector: 'app-header',
  imports: [ToolbarModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
@Input() title: string='';
}

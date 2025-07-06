import { Component } from '@angular/core';
import { ComicComponent } from './comic-component/comic-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ComicComponent, FormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

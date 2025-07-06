import { Component } from '@angular/core';
import { ToDoComponent } from './to-do-component/to-do-component';

@Component({
  selector: 'app-root',
  imports: [ToDoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Ejercicio_02';
}

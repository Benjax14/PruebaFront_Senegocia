import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do-component.html',
  styleUrl: './to-do-component.css',
  standalone: true
})

export class ToDoComponent {

  toDoList: { text: string, success: boolean }[] = [];
  newTask: string = '';

  ngOnInit() {
    const savedTasks = localStorage.getItem('toDoList');
    if (savedTasks) {
      this.toDoList = JSON.parse(savedTasks);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
  }

  addTask() {
    const text = this.newTask.trim();
    if (text) {
      this.toDoList.push({ text: text, success: false });
      this.newTask = '';
      this.saveToLocalStorage();
    }
  }

  toggleSuccess(task: any) {
    task.success = !task.success;
    this.saveToLocalStorage();
  }

  removeTask(index: number) {
    this.toDoList.splice(index, 1);
    this.saveToLocalStorage();
  }

}

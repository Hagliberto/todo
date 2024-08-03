import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TodoComponent {
  newTask: string = '';
  tasks: { name: string, completed: boolean, archived: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false, archived: false });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleArchiveTask(index: number) {
    this.tasks[index].archived = !this.tasks[index].archived;
  }
}

import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TodoComponent]
})
export class AppComponent {
  title = 'todo-list';
}

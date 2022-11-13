import { Component } from "@angular/core";

interface TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: "app-todo-list",
  template: `<input id="name" type="text" name="name" [(ngModel)]="name" />
    <button (click)="add()">Add</button>
    <ul>
      <li
        *ngFor="let item of items"
        (click)="toggleItem(item)"
        [ngClass]="{ 'is-done': item.isDone }"
      >
        {{ item.name }}
      </li>
      <p class="task-counter">
        {{ taskCounter }} remaining out of {{ items.length }} tasks
      </p>
    </ul>`,
  styles: [
    `
      .is-done {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodoListComponent {
  public name: string = "";
  public items: Array<TodoItem> = [];
  public taskCounter: number = 0;

  public getRemainingCount() {
    return this.items.filter((item) => !item.isDone).length;
  }

  public add() {
    if (!this.name) {
      return;
    }

    this.items.push({ name: this.name, isDone: false });
    this.name = "";
    this.taskCounter++;
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
    this.taskCounter = this.getRemainingCount();
  }
}

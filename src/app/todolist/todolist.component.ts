import { Component } from "@angular/core";

interface TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: "app-todo-list",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"],
})
export class TodoListComponent {
  public name = "";
  public items: Array<TodoItem> = [];
  public taskCounter = 0;

  private getRemainingCount = () =>
    this.items.filter(({ isDone }) => !isDone).length;

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

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TodoListComponent } from "./todolist.component";
import { MatCardModule } from "@angular/material/card";

describe("TodoListComponent", () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [MatCardModule],
    });

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize with empty name, items, and taskCounter", () => {
    expect(component.name).toBe("");
    expect(component.items.length).toBe(0);
    expect(component.taskCounter).toBe(0);
  });

  it("should add an item to the list", () => {
    component.name = "New Task";
    component.add();
    expect(component.items.length).toBe(1);
    expect(component.items[0].name).toBe("New Task");
    expect(component.taskCounter).toBe(1);
  });

  it("should toggle the status of an item", () => {
    component.items = [
      { name: "Task 1", isDone: false },
      { name: "Task 2", isDone: false },
    ];
    const item = component.items[0];
    component.toggleItem(item);
    expect(item.isDone).toBe(true);
    expect(component.taskCounter).toBe(1);
  });
});

import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { InventoryComponent } from "./inventory.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("InventoryComponent", () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

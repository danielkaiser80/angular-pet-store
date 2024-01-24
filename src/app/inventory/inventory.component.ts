import { Component } from "@angular/core";
import { DataPoint, single } from "../data";
import { Color, LegendPosition, ScaleType } from "@swimlane/ngx-charts";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"],
})
export class InventoryComponent {
  view: [number, number] = [700, 400];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = LegendPosition.Below;

  colorScheme: Color = {
    group: ScaleType.Ordinal,
    name: "default",
    selectable: true,
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };

  single: DataPoint | undefined;

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data: any): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}

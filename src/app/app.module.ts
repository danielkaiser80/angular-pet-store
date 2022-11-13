import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { RoutingModule } from "./routing/routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { DogsComponent } from "./dogs/dogs.component";
import { TodoListComponent } from "./todolist/todolist.component";

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    HeaderComponent,
    DogsComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

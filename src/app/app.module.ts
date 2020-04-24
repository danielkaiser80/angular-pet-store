import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InventoryComponent} from './inventory/inventory.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule
  ],
  declarations: [
    AppComponent,
    InventoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: InventoryComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InventoryComponent} from "../inventory/inventory.component";
import {DogsComponent} from "../dogs/dogs.component";


const routes: Routes = [
  {path: 'inventory', component: InventoryComponent},
  {path: 'dogs', component: DogsComponent},
  {path: '', redirectTo: '/inventory', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {
}

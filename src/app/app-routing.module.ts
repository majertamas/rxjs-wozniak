import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuickStartComponent} from "./01_03/quick-start/quick-start.component";

const routes: Routes = [
  { path: '', component: QuickStartComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

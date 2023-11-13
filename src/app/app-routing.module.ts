import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuickStartComponent} from "./01_03/quick-start/quick-start.component";
import {
  ExecutionTimingEmptyObservableComponent
} from "./03_22/execution-timing-empty-observable/execution-timing-empty-observable.component";
import {
  SynchronousEmissionNextNotificationComponent
} from "./03_23/synchronous-emission-next-notification/synchronous-emission-next-notification.component";
import {
  AsynchronousEmissionMoreNextNotificationComponent
} from "./03_24/asynchronous-emission-more-next-notification/asynchronous-emission-more-next-notification.component";
import {
  TeardownCompleteNotificationComponent
} from "./03_25/teardown-complete-notification/teardown-complete-notification.component";
import {ErrorNotificationComponent} from "./03_26/error-notification/error-notification.component";
import {OrderComponent} from "./03_28/order/order.component";
import {CancellationUnsubscribeComponent} from "./03_29/cancellation-unsubscribe/cancellation-unsubscribe.component";

const routes: Routes = [
  { path: '01_03', component: QuickStartComponent },
  { path: '03_22', component: ExecutionTimingEmptyObservableComponent },
  { path: '03_23', component: SynchronousEmissionNextNotificationComponent },
  { path: '03_24', component: AsynchronousEmissionMoreNextNotificationComponent },
  { path: '03_25', component: TeardownCompleteNotificationComponent },
  { path: '03_26', component: ErrorNotificationComponent },
  { path: '03_28', component: OrderComponent },
  { path: '03_29', component: CancellationUnsubscribeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

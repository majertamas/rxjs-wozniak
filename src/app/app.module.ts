import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuickStartComponent } from './01_03/quick-start/quick-start.component';
import { ExecutionTimingEmptyObservableComponent } from './03_22/execution-timing-empty-observable/execution-timing-empty-observable.component';
import { SynchronousEmissionNextNotificationComponent } from './03_23/synchronous-emission-next-notification/synchronous-emission-next-notification.component';
import { AsynchronousEmissionMoreNextNotificationComponent } from './03_24/asynchronous-emission-more-next-notification/asynchronous-emission-more-next-notification.component';
import { TeardownCompleteNotificationComponent } from './03_25/teardown-complete-notification/teardown-complete-notification.component';
import { ErrorNotificationComponent } from './03_26/error-notification/error-notification.component';
import { OrderComponent } from './03_28/order/order.component';
import { CancellationUnsubscribeComponent } from './03_29/cancellation-unsubscribe/cancellation-unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickStartComponent,
    ExecutionTimingEmptyObservableComponent,
    SynchronousEmissionNextNotificationComponent,
    AsynchronousEmissionMoreNextNotificationComponent,
    TeardownCompleteNotificationComponent,
    ErrorNotificationComponent,
    OrderComponent,
    CancellationUnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

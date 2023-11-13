import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from "rxjs";
import {consoleLogWithGreen} from "../../util/util";

@Component({
  selector: 'app-cancellation-unsubscribe',
  templateUrl: './cancellation-unsubscribe.component.html',
  styleUrls: ['./cancellation-unsubscribe.component.css']
})
export class CancellationUnsubscribeComponent implements OnInit {

  ngOnInit() {

    const interval$: Observable<number> = new Observable<number>((subscriber: Subscriber<number>): () => void => {
      let counter: number = 1;
      const intervalId = setInterval(() => {
        consoleLogWithGreen(`Emitted: ${counter}`)
        subscriber.next(counter++);
      }, 1000);

      // cleanup!!!
      return () => {
        clearInterval(intervalId);
      };

    });

    const subscription: Subscription = interval$.subscribe(value => consoleLogWithGreen(`${value}`));

    setTimeout(() => {
      consoleLogWithGreen('Unsubscribing...');
      subscription.unsubscribe();
    }, 7000);

  }

}

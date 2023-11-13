import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber} from "rxjs";
import {consoleLogWithGreen, consoleLogWithRed, consoleLogWithYellow} from "../../util/util";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  ngOnInit() {

    let o: Observable<string> = new Observable<string>((subscriber: Subscriber<string>): () => void => {
      console.log(`inside of observable function`);
      subscriber.next('Alice');
      subscriber.next('Ben');
      setTimeout(() => {
        subscriber.error('e r r o r');
      }, 2000);
      setTimeout(() => {
        subscriber.next('Charlie');
        subscriber.complete();
      }, 4000);

      return (): void => {
        consoleLogWithYellow(`teardown function`);
      }

    });
    console.log(`before subscribe`);
    o.subscribe({
      next: (value: string) => consoleLogWithGreen(`next: ${value}`),
      error: (error: string) =>consoleLogWithRed(`error: ${error}`),
      complete: () => consoleLogWithYellow(`complete`)
    });
    console.log(`after subscribe`);

  }

}

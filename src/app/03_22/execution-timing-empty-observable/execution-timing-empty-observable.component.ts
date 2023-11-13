import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-execution-timing-empty-observable',
  templateUrl: './execution-timing-empty-observable.component.html',
  styleUrls: ['./execution-timing-empty-observable.component.css']
})
export class ExecutionTimingEmptyObservableComponent implements OnInit {

  ngOnInit() {
    let o: Observable<number> = new Observable<number>((subscriber: Subscriber<number>): void => {
      console.log(`inside of observable function`);
      // subscriber.next(1);
      // subscriber.next(2);
      // subscriber.next(3);
      // subscriber.complete();
    });
    console.log(`before subscribe`);
    o.subscribe({
      next: (value) => console.log(`next: ${value}`),
      complete: () => console.log(`complete`)
    });
    console.log(`after subscribe`);
  }

}

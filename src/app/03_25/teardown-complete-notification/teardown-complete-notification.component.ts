import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-teardown-complete-notification',
  templateUrl: './teardown-complete-notification.component.html',
  styleUrls: ['./teardown-complete-notification.component.css']
})
export class TeardownCompleteNotificationComponent implements OnInit {

  ngOnInit() {
    let o: Observable<string> = new Observable<string>((subscriber: Subscriber<string>): () => void => {
      console.log(`inside of observable function`);
      subscriber.next('Alice');
      subscriber.next('Ben');
      setTimeout(() => {
        subscriber.next('Charlie');
        subscriber.complete();
      }, 2000);

      return (): void => {
        console.log(`teardown function`);
      }

    });
    console.log(`before subscribe`);
    o.subscribe({
      next: (value) => console.log(`next: ${value}`),
      complete: () => console.log(`complete`)
    });
    console.log(`after subscribe`);
  }

}

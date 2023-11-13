import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-asynchronous-emission-more-next-notification',
  templateUrl: './asynchronous-emission-more-next-notification.component.html',
  styleUrls: ['./asynchronous-emission-more-next-notification.component.css']
})
export class AsynchronousEmissionMoreNextNotificationComponent implements OnInit {

  ngOnInit() {
    let o: Observable<string> = new Observable<string>((subscriber: Subscriber<string>): void => {
      console.log(`inside of observable function`);
      subscriber.next('Alice');
      subscriber.next('Ben');
      setTimeout(() => {
        subscriber.next('Charlie');
      }, 2000);
    });
    console.log(`before subscribe`);
    o.subscribe({
      next: (value) => console.log(`next: ${value}`),
      complete: () => console.log(`complete`)
    });
    console.log(`after subscribe`);
  }

}

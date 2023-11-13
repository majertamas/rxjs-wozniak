import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-synchronous-emission-next-notification',
  templateUrl: './synchronous-emission-next-notification.component.html',
  styleUrls: ['./synchronous-emission-next-notification.component.css']
})
export class SynchronousEmissionNextNotificationComponent implements OnInit {


  ngOnInit() {
    let o: Observable<string> = new Observable<string>((subscriber: Subscriber<string>): void => {
      console.log(`inside of observable function`);
      subscriber.next('Alice');
    });
    console.log(`before subscribe`);
    o.subscribe({
      next: (value) => console.log(`next: ${value}`),
      complete: () => console.log(`complete`)
    });
    console.log(`after subscribe`);
  }


}

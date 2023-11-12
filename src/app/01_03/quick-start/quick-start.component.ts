import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.css']
})
export class QuickStartComponent implements OnInit {


  ngOnInit() {

    // name$.subscribe(value => console.log(value));

    // storeDataOnServer('Some value').subscribe(
    //   value => console.log(value)
    // );

    // storeDataOnServerError('Some value').subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err.message)
    // });

  }


}

export const name$ = of('Alice', 'Ben', 'Charlie');

export function storeDataOnServer(data: string): Observable<string> {
  return new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next(`Saved successfully: ${data}`);
      subscriber.complete();
    }, 1000);
  });
}

export function storeDataOnServerError(data: string): Observable<string> {
  return new Observable(subscriber => {
    setTimeout(() => {
      subscriber.error(new Error('Failure!'));
    }, 1000);
  });
}

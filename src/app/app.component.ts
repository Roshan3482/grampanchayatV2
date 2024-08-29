import {Component} from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'GramPanchayat';
    constructor() {
//        const subject = new Subject<number>();
//
//        subject.subscribe({
//            next: (v) => {
//                console.log("observerA: "+v)
//            }
//        });
//
//        subject.next(1);
//        subject.next(2);
//        
//        console.log("Break");
//        
//        subject.subscribe({
//            next: (v) => console.log(`observerB: ${v}`)
//        });
//
//        subject.next(3);
//        subject.next(4);
//
//        subject.subscribe({
//            next: (v) => console.log(`observerC: ${v}`)
//        });
        

        const behaviorSubject = new BehaviorSubject<number>(0); // Initial value is 0

        behaviorSubject.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });
        behaviorSubject.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        behaviorSubject.next(1);
        behaviorSubject.next(2);

        behaviorSubject.subscribe({
            next: (v) => console.log(`observerC: ${v}`)
        });

        behaviorSubject.next(3);

    }
}

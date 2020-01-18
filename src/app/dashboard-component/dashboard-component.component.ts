import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { of, Observable, Subject, zip, from, interval, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  form: FormGroup = new FormGroup({

  });
  f: NgForm;
  headersArry = ["First", "Second", "Third", "Fourth"];
  formArray = [
    { "rowHeader": "Row1", "rowArry": [{ "id": 1, "name": "Abc" }, { "id": 2, "name": "def" }, { "id": 3, "name": "xyz" }] },
    { "rowHeader": "Row2", "rowArry": [{ "id": 1, "name": "Abc" }, { "id": 2, "name": "def" }, { "id": 3, "name": "xyz" }] },
    { "rowHeader": "Row3", "rowArry": [{ "id": 1, "name": "Abc" }, { "id": 2, "name": "def" }, { "id": 3, "name": "xyz" }] }
  ];
  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({});
    this.formArray.forEach(question => {
      this.form.addControl(question.rowHeader, _fb.control(null, Validators.required));
    })
  }

  ngOnInit() {
    // const promise = new Promise((data) => {
    //   data(1);
    //   data(2);
    //   data(3);
    // })
    //   .then(element => console.log("Promise" + element));

    // const observable = new Observable((data) => {
    //   data.next(1);
    //   data.next(2);
    //   data.next(3);
    //   }).subscribe(element => console.log('Observable ' + element));
// Typeahead 
//     const searchBox = document.getElementById('search-box');

// const typeahead = fromEvent(searchBox, 'input').pipe(
//   map((e: KeyboardEvent) => e.target.value),
//   filter(text => text.length > 2),
//   debounceTime(10),
//   distinctUntilChanged(),
//   switchMap(() => ajax('/api/endpoint'))
// );

// typeahead.subscribe(data => {
//  // Handle the data from the API
// });

//Exponential backoff

// function backoff(maxTries, ms) {
//   return pipe(
//     retryWhen(attempts => zip(range(1, maxTries), attempts)
//       .pipe(
//         map(([i]) => i * i),
//         mergeMap(i =>  timer(i * ms))
//       )
//     )
//   );
//  }
 
//  ajax('/api/endpoint')
//    .pipe(backoff(3, 250))
//    .subscribe(data => handleData(data));
    // const nums = of(1, 2, 3);

    // const squareValues = map((val: number) => val * val);
    // const squaredNums = squareValues(nums);

    
    // squaredNums.subscribe(x => console.log(x));


    // const mySubject = new Subject();

    // mySubject.next(1);

    // const subscription1 = mySubject.subscribe(x => {
    //   console.log('From subscription 1:', x);
    // });

    // mySubject.next(2);


// const subscription2 = mySubject.subscribe(x => {
//   console.log('From subscription 2:', x);
// });

// mySubject.next(3);

// subscription1.unsubscribe();

// mySubject.next(4);

// const mySubject = new Subject();

// const sub1 = mySubject.subscribe(val => console.log(val), err =>
//   console.log('From sub1:', err.message)
// );

// const sub2 = mySubject.subscribe(val => console.log(val), err =>
//   console.log('From sub2:', err.message)
// );

// mySubject.error(new Error('Oh nooo!'));

// const mySubject = new Subject();
// const words = ['Hot Dog', 'Pizza', 'Hamburger'];

// const trickleWords = zip(
//   from(words),
//   // interval(750),
//   word => word
// );

// const subscription1 = mySubject.subscribe((x : string) => {
//   console.log(x.toUpperCase());
// });

// const subscription2 = mySubject.subscribe((x : string) => {
//   console.log(
//     x
//       .toLowerCase()
//       .split('')
//       .reverse()
//       .join('')
//   );
// });

// trickleWords.subscribe(mySubject);

// const behaviorSub = new BehaviorSubject("Hi");

// behaviorSub.next("0");
// const sub3 =behaviorSub.subscribe(x => console.log(x));

// behaviorSub.next("1");

const replaySub = new ReplaySubject(2);
replaySub.next(1);
replaySub.next(2);
replaySub.next(4);
replaySub.next(5);
replaySub.next(6);
const sub4 = replaySub.subscribe(x => console.log(x));
replaySub.next(3);

}
  submitForm(f) {
    console.log(f.form.value);
  }
}

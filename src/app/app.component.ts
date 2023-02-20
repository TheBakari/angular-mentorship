import { Employee } from './homework3/employes.model';
import { Candidate } from './homework3/candidate.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'typescritpApp';
  ngOnInit(): void {
    // const candidate = new Candidate(1, 'Marko', 'Markovic', '20-5-1993');
    // const candidate2 = new Candidate(2, 'Nikola', 'Nikolic', '19-04-1992');
    // // console.log(candidate);
    // // console.log(candidate2);
    // const arrCand: Candidate[] = [
    //   {
    //     id: 1,
    //     firstName: 'Jovana',
    //     lastName: 'Jovanovic',
    //     birthday: '19-03-1993',
    //   },
    //   {
    //     id: 1,
    //     firstName: 'Mila',
    //     lastName: 'Milovanovic',
    //     birthday: '19-03-1993',
    //   },
    //   {
    //     id: 1,
    //     firstName: 'Matija',
    //     lastName: 'Jovanovic',
    //     birthday: '19-03-1993',
    //   },
    // ];
    // console.log(arrCand);
    // function disp() {
    //   return arrCand;
    // }
    // let display = disp();
    // for (let i in display) {
    //   console.log(display[i]);
    // }

    const emp = new Employee(
      1,
      'Marko',
      'markomarkovic@gmail.com',
      +38161222333,
      'Programmer'
    );
    const emp2 = new Employee(
      1,
      'Jovan',
      'Jovanovic@gmail.com',
      +38161222333,
      'Programmer'
    );
    console.log(emp);
    console.log(emp2);
  }
}

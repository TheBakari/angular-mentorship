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
    const candidate = new Candidate(1, 'Marko', 'Markovic', '20-5-1993');
    const candidate2 = new Candidate(2, 'Nikola', 'Nikolic', '19-04-1992');

    console.log(candidate);
    console.log(candidate2);

    const arrCand: Array<{ id: number; firstName: string }> = [
      { id: 1, firstName: 'Jovana' },
    ];
  }
}

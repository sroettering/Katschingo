import { Component, OnInit } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private backand: BackandService) {
  }

  ngOnInit(): void {
    this.backand.init({
      appName: 'katschingo',
      anonymousToken: '6ce61fec-3b71-4789-8964-10adad98c099'
    });

    this.backand.object.getList('user', {
      'pageSize': 20,
      'pageNumber': 1,
      'filter': [],
      'sort': []
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => { });
 }
}

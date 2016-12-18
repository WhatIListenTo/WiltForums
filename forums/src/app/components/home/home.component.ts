import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private Data: DataService) { }

  ngOnInit() {
    this.Data.getNewestThread().subscribe((r: any) => {
      console.log(r);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestaurantList();
  }

}

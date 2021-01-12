import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output()
  updateListEvent =  new EventEmitter();
  constructor(public launchService: LaunchService) {}

  ngOnInit() {
  }
  years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  updateList(data, field){
    this.updateListEvent.emit({field: field, value: data})
  }
}

import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Launch } from '../hero';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  launchList: Launch[] = [];
  @Input()
  LaunchListUpdated: Launch[];
  
  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.launchService.getLaunches()
      .subscribe(list => {
        if (list) {
          this.launchList = list;
        }
      });
  }
}

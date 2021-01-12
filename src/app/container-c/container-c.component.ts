import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../hero';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-container-c',
  templateUrl: './container-c.component.html',
  styleUrls: ['./container-c.component.css']
})
export class ContainerCComponent implements OnInit {
  LaunchList: Launch[];

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
  }
  updateList(data){
    this.launchService.updateLaunches(data).subscribe((item: any)=>{
      if(item){
        this.LaunchList = item;
      }
    });
  }
}

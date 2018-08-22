import { Component, OnInit } from '@angular/core';
import { GettaskService } from '../../../services/gettask.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public teammates = [];
  public errorMessage;

  constructor(private __taskService: GettaskService) { }

  ngOnInit() {
    // this.__taskService.getTeam()
    //   .subscribe(data => this.teammates = data,
    //     error => this.errorMessage = error);
  }


}

import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { NgForm } from '@angular/forms';
import { Projects } from '../../services/projects.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.refreshProjectsList();
  }

  refreshProjectsList(){
    this.projectsService.getProjects('2').subscribe((res) => {
      this.projectsService.projects = res as Projects[];
      // console.log("frontend");
    });
  }

}

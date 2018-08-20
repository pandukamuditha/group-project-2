import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../services/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.refreshProjectsList();
  }

  refreshProjectsList(){
    this.projectsService.getAllProjects('2').subscribe((res) => {
      this.projectsService.projects = res as Projects[];
      // console.log("frontend");
    });
  }

}

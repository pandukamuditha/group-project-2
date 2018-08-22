import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../services/projects.model';
import { Tasks } from '../../Services/task.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  flag = false;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.refreshProjectsList();
    // this.projectsService.projects.forEach(element => {
    //   this.getTasks(proj_id);
    // });
  }

  refreshProjectsList(){
    this.projectsService.getAllProjects('2').subscribe((res) => {
      this.projectsService.projects = res as Projects[];
      // console.log("frontend");
    });
  }

  getTasks(id: string){
    // console.log('front-in');
    this.projectsService.getTasks(id).subscribe((res) => {
      this.projectsService.tasks = res as Tasks[];
      // console.log("frontend");
    });
    this.flag = true;
  }


}

import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { ProjectsService } from '../../../services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project = new Project();

  constructor(
    private projectService: ProjectsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveDetails() {
    this.router.navigateByUrl('admin/new-project/schedule');
  }

}

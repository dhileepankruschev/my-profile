import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { Project } from '../model/proj.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  myForm: FormGroup;
  showProj: boolean = false;

  projectlist: Array<Project> = [];
  project: Project;

  projectName: string;
  languages: string;
  hardware: string;
  description: string;
  responsibility: string;
  responsibilities: string[] = [];

  constructor() {
    this.myForm = new FormGroup({
      "project": new FormGroup({
        "projectName": new FormControl('', Validators.required),
        "languages": new FormControl('', Validators.required),
        "hardware": new FormControl(''),
        "description": new FormControl(''),
        "responsibilites": new FormControl('')
      })
    });
  }

  ngOnInit() {
    this.getProjectList();
  }

  getProjectList() {

    this.responsibilities = ["Requirement Analysis", "Coding and Unit Testing", "Production Support"];

    this.projectlist = [new Project(
      "International Patient Care", "Java, Rest Services, Spring, Struts, Hibernate",
      "Linux, Tomcat", "International Patient Care is a web based application that enables users to manage their treatment for their health problems. With this project, Users will have the functionality to register themselves and will save and edit their details regarding their health conditions. Their requests would be verified by medical managers and evaluators.",
      this.responsibilities)];
  }

  addProjDtls() {
    this.showProj = true;

    this.myForm = new FormGroup({
      "project": new FormGroup({
        "projectName": new FormControl('', Validators.required),
        "languages": new FormControl('', Validators.required),
        "hardware": new FormControl(''),
        "description": new FormControl(''),
        "responsibilites": new FormControl('')
      })
    });
  }

  submit() {

    this.projectName = this.myForm.get('project').get('projectName').value;
    this.languages = this.myForm.get('project').get('languages').value;
    this.hardware = this.myForm.get('project').get('hardware').value;
    this.description = this.myForm.get('project').get('description').value;
    this.responsibility = this.myForm.get('project').get('responsibilites').value;

    this.responsibilities = this.responsibility.split(',');

    this.project = new Project(this.projectName,
      this.languages, this.hardware, this.description, this.responsibilities)

    this.projectlist.push(this.project);

    this.showProj = false;
  }

  cancelChanges() {
    this.showProj = false;
  }

  deleteProject(arrindex: number) {
    this.projectlist.splice(arrindex, 1);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  expDetails: string[] = [];
  qualDetails: string[] = [];
  isExpHidden: boolean = true;
  isQualHidden: boolean = true;
  newExpText: string;
  newQualText: string;

  ngOnInit() {

    this.expDetails.push("Currently working as Senior Associate in Cognizant from July 2010.");

    this.qualDetails.push("Bachelor of Engineering, Mechanical - St.Joseph's College of Engineering, Chennai.");
  }

  addExpDls() {
    this.isExpHidden = false;
  }

  saveExp() {
    this.expDetails.push(this.newExpText);
    this.newExpText = '';
    this.isExpHidden = true;
  }

  addQualDls() {
    this.isQualHidden = false;
  }

  saveQual() {
    this.qualDetails.push(this.newQualText);
    this.newQualText = '';
    this.isQualHidden = true;
  }

}

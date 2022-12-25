import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-hired',
  templateUrl: './get-hired.component.html',
  styleUrls: ['./get-hired.component.scss']
})
export class GetHiredComponent implements OnInit {

  services = [{
    title: 'Registration',
    desciption: 'Register your personal identity on this platform to access features'
  }, {
    title: 'Edit your profile',
    desciption: 'Edit and complete your ID to make it easier for job recruiters to find you'
  }, {
    title: 'Upload your resume',
    desciption: 'Upload the latest resume to let recruiters know about work experience'
  }];
  selectedIndex: Number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  handleMouseEnter(index: Number) {
    this.selectedIndex = index;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

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

  processes = [
    { name: 'Contact', icon: 'contacts', color: '#e7e7e7', description: 'Sample text for Contact' },
    { name: 'Connect', icon: 'cable', color: '#fecbc2', description: 'Sample text for Connect' },
    { name: 'Review', icon: 'reviews', color: '#ffeeb5', description: 'Sample text for Review' },
    { name: 'Interview', icon: 'laptop_mac', color: '#e9edf5', description: 'Sample text for Interview' },
    { name: 'Hire', icon: 'check_box', color: '#b5e0c6', description: 'Sample text for Hire' },
  ];

  spectrums = [{
    title: 'Engineering & Technology',
    icon: 'engineering'
  }, {
    title: 'Health Care',
    icon: 'health_and_safety'
  }, {
    title: 'Finance',
    icon: 'payments'
  }, {
    title: 'Automobile',
    icon: 'local_shipping'
  }, {
    title: 'Government',
    icon: 'assured_workload'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

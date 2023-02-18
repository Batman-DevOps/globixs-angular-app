import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

  // services = [{
  //   title: 'Registration',
  //   desciption: 'Register your personal identity on this platform to access features'
  // }, {
  //   title: 'Edit your profile',
  //   desciption: 'Edit and complete your ID to make it easier for job recruiters to find you'
  // }, {
  //   title: 'Upload your resume',
  //   desciption: 'Upload the latest resume to let recruiters know about work experience'
  // }];

  services = [{
    title: 'Get right talent',
    desciption: 'Globixs help you post a job and search a candidate that fits your job profile'
  }, {
    title: 'Reach out to candidates',
    desciption: 'Globixs has a huge candidate database which make it easier to connect with a candidate'
  }, {
    title: 'Schedule interviews',
    desciption: 'Interview potential fits for your job'
  }];

  processes = [
    { name: 'Contact', icon: 'contacts', color: '#adadad', description: 'Reach out to us with your job requirements' },
    { name: 'Connect', icon: 'cable', color: '#fc7962', description: 'We connect with candidates as per your requirements' },
    { name: 'Review', icon: 'reviews', color: '#ffd753', description: 'we help you shortlist a profile' },
    { name: 'Interview', icon: 'laptop_mac', color: '#8ba0ca', description: 'We set up a interview with a candidate' },
    { name: 'Hire', icon: 'check_box', color: '#8ccfa6', description: 'We help you hire right candidate' },
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
  selectedIndex: Number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  handleMouseEnter(index: Number) {
    this.selectedIndex = index;
  }

}

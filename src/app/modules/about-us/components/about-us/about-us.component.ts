import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutUsContent = [{
    imageUrl: 'assets/images/feed-the-need.jpg',
    title: 'Feed The Need',
    description: `<p>We are committed to serving communities and individuals facing hunger.
    Every dollar raised from the COVID-19 response fund used to help provide food and funds from local food banks.</p>
    <p>You can help by making sure we can be there for our neighbors during any time of uncertainty.</p>`
  }, {
    imageUrl: 'assets/images/child-education.jpg',
    title: 'Child Education',
    description: `<p>We can achieve breakthroughs in education by ensuring children have the best chance to learn. Your contribution makes their education progression within reach!</p>
    <p>Limited earning opportunities to pay for school expenses.</p>
    <p>Pressure to drop out of school to provide immediate financial support to their families.</p>
    Lack of access to remote learning technology.`
  }, {
    imageUrl: 'assets/images/intellectually-challenged.jpg',
    title: 'Intellectually Disability',
    description: `<p>We support intellectually disabled children tailoring with basic life skills and fundamental concepts.</p>
    <p>Support schools help teach skills that will help special child to function as independently as possible on a daily basis.</p>
    <p>Raise for special education & boarding facilities for Intellectually Challenged children.</p>
    <p>Provide a meal for a month.</p>
    <p>Sponsor a Meal – on special occasions days and help celebrate child.</p>`
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

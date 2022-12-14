import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-help',
  templateUrl: './how-to-help.component.html',
  styleUrls: ['./how-to-help.component.scss']
})
export class HowToHelpComponent implements OnInit {

  helpContent = [{
    title: 'Volunteer',
    icon: 'assets/images/volunteer.jpg',
    description: `<p>Pledge your time. Volunteering is a rewarding way to spend your spare time. By volunteering for Changing Lives, you’ll be joining a network of life-changers, all working together to empower people to change their lives for the better. Get involved in our programs to be recongnized by prestigious PVSA national award.</p>`,
    isActivityAvailable: true,
    activity: 'Contact Us',
    activityLink: '/contact-us',
    target: ''
  }, {
    title: 'Donation',
    icon: 'assets/images/donate.jpg',
    description: `<p>GiveTheNeed is eligible to receive a corporate matching, double your donations.   
    Any donations are appreciated and 100% of the donations reach the right cause.<br>Fuel the effort through your donations: Click below to Donate</p>`,
    isActivityAvailable: true,
    activity: 'Donate',
    activityLink: 'https://www.tinyurl.com/GiveTheNeedDonate',
    target: '_blank'
  }, {
    title: 'Share',
    icon: 'assets/images/share.jpg',
    description: `<p>Spread the word of the kindness of the giving campaign with family and friends.</p>`,
    activity: 'Share',
    isActivityAvailable: false,
    activityLink: 'https://www.facebook.com/GiveTheNeedCharity',
    activityLink2: 'https://www.instagram.com/givetheneed/',
    target: '_blank'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

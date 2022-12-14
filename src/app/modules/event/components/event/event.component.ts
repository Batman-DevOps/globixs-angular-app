import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events = [
    { name: 'Intellectual Disability', imagePath: 'https://www.givetheneed.org/wp-content/uploads/2022/09/Sadhana.jpg' },
    { name: 'Covid Charity Drive', imagePath: 'https://www.givetheneed.org/wp-content/uploads/2022/09/Truck-Load-Give-Away-1.png' },
    { name: 'Truck Load Drive', imagePath: 'https://www.givetheneed.org/wp-content/uploads/2022/09/Truck-Load-Give-Away.png' },
    { name: 'Feed The Need', imagePath: 'https://www.givetheneed.org/wp-content/uploads/2022/09/Food-Drive.jpg' },
    { name: 'Plant Donations', imagePath: 'https://www.givetheneed.org/wp-content/uploads/2022/09/Truck-Load-Give-Away-2.png' },
    { name: 'Homeless Shelters Drive', imagePath: 'https://www.givetheneed.org/wp-content/uploads/2022/09/Truck-Load-Give-Away-3.png' },
    { name: 'Knowledge is Power', imagePath: 'https://www.givetheneed.org/wp-content/uploads/2022/09/Tutoring.png' },
    { name: 'Health is Wealth', imagePath: 'https://www.givetheneed.org/wp-content/uploads/2022/09/Yoga-1.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  youthMembers = ['Sahasra', 'Amy', 'Anwita', 'Haley', 'Krithika', 'Saisha'];

  logos: any[] = [
    { name: 'Adidas', logo: 'assets/images/logos/adidas.jpg' },
    { name: 'Amazon', logo: 'assets/images/logos/amazon.jpg' },
    { name: 'Flipkart', logo: 'assets/images/logos/flipkart.jpg' },
    { name: 'H&M', logo: 'assets/images/logos/h&m.jpg' },
    { name: 'Myntra', logo: 'assets/images/logos/myntra.jpg' },
    { name: 'Nike', logo: 'assets/images/logos/nike.jpg' },
    { name: 'Adidas', logo: 'assets/images/logos/adidas.jpg' },
    { name: 'Amazon', logo: 'assets/images/logos/amazon.jpg' },
    { name: 'Flipkart', logo: 'assets/images/logos/flipkart.jpg' },
    { name: 'H&M', logo: 'assets/images/logos/h&m.jpg' },
    { name: 'Myntra', logo: 'assets/images/logos/myntra.jpg' },
    { name: 'Nike', logo: 'assets/images/logos/nike.jpg' },
    { name: 'Adidas', logo: 'assets/images/logos/adidas.jpg' },
    { name: 'Amazon', logo: 'assets/images/logos/amazon.jpg' },
    { name: 'Flipkart', logo: 'assets/images/logos/flipkart.jpg' },
    { name: 'H&M', logo: 'assets/images/logos/h&m.jpg' },
    { name: 'Myntra', logo: 'assets/images/logos/myntra.jpg' },
    { name: 'Nike', logo: 'assets/images/logos/nike.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

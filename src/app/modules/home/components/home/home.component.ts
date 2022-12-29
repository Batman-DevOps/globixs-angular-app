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
    { name: 'Nike', logo: 'assets/images/logos/nike.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
    var sections = document.querySelectorAll('section');
    var options = {
      rootMargin: '0px',
      threshold: 0.25
    }
    var callback = (entries: any) => {
      entries.forEach((entry: any) => {
        var target = entry.target;
        if (entry.intersectionRatio >= 0.25) {
          target.classList.add("is-inview");
        } else {
          target.classList.remove("is-inview");
        }
      })
    }
    var observer = new IntersectionObserver(callback, options)
    sections.forEach((section, index) => {
      observer.observe(section)
    })
  }

}

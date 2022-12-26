import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, Scroll, Event } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  title = 'globixs-angular-app';

  @ViewChild("mainContent")
  private mainContentDiv!: ElementRef<HTMLElement>;

  constructor(private readonly router: Router) {

  }

  /**
    Whenever a new route is activated
    @param _event
  */
  onActivate(_event: any): void {
    // Scrolling back to the top
    // Reference: https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
    if (this.mainContentDiv) {
      (this.mainContentDiv.nativeElement as HTMLElement).scrollTop = 0;
    }
  }
}

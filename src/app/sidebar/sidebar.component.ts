import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  setActiveRoute($event: any) {
    throw new Error('Method not implemented.');
  }

  // Variable to store the current route
  currentRoute: string = '/';

  constructor(private router: Router) {
    // Subscribe to router events to track the recent route
    this.router.events.subscribe((event) => {
      // Check if the event is a NavigationEnd event
      if (event instanceof NavigationEnd) {
        // Update the currentRoute variable with the recent URL
        this.currentRoute = event.url;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formula-zero-front';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}
}

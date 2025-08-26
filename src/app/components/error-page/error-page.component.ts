import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
   @Input() errorCode: number = 404;
  @Input() title: string = 'Page not found';
  @Input() description: string = 'Sorry, the page you are looking for doesn’t exist or has been moved.';

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  reload() {
    window.location.reload();
  }
}

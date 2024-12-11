import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: '../public/html/index.html',
  // template: '<h1>Hello World</h1>',
  styleUrls: ['../public/scss/style.scss']
})
export class AppComponent {
  title = 'homes';
}

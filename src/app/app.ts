import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['../assets/styles/jquery-ui.css','../assets/slick/slick.css','../assets/slick/slick-theme.css','../assets/styles/animate.min.css',
    '../assets/styles/hover-min.css','../assets/styles/magnific-popup.css','./app.css','../assets/styles/adaptive.css']
})
export class App {
  protected readonly title = signal('Macaroons');
}

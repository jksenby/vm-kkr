import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    afterNextRender({
      read: () => {
        const element = document.querySelector('html');
        (element as HTMLElement).classList.toggle('my-app-dark');
      },
    });
  }
}

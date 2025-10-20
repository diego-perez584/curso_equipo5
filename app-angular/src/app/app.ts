import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiegoPerezComponent } from './diego-perez/diego-perez';

@Component({
  selector: 'app-root',
  imports: [DiegoPerezComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-angular');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly libraryTitle = signal<string>('MY RECIPE BOX');
  protected PrimaryButton(): void {
    console.log('Spaghetti Carbonara');
  }
  protected SecondaryButton(): void {
    console.log('Caprese Salad');
  }
}

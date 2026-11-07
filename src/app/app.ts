import { Component, signal, computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly libraryTitle = signal<string>('MY RECIPE BOX');
  protected PrimaryButton(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }
  protected SecondaryButton(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly serving = signal<number>(1);
  protected readonly adjustedIngredients = computed(() => {
    const recipe = this.recipe();
    const serving = this.serving();
    return recipe.ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * serving,
    }));
  });

  protected addServing(): void {
    this.serving.update((value) => value + 1);
  }

  protected deleteServing(): void {
    if (this.serving() > 1) {
      this.serving.update((value) => value - 1);
    }
  }

}

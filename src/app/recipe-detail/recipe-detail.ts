import { Component, input, computed, signal} from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  imports: [],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.css',
  templateUrl: './recipe-detail.html',
})
export class RecipeDetail {
  readonly recipe = input.required<RecipeModel>();
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
  protected readonly imageUrl = computed(() => this.recipe().imgUrl);
}

import { Component, signal, computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  imports: [RecipeDetail],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})

export class RecipeList {
  protected readonly libraryTitle = signal<string>('MY RECIPE BOX');
  protected PrimaryButton(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }
  protected SecondaryButton(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

}

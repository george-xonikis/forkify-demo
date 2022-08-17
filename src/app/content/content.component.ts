import {Component, Input} from '@angular/core';
import {Recipe} from "./search-result/search-result.component";
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, pluck, tap} from "rxjs";
import {RecipeDetails} from "./recipe-details/recipe-details.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() recipes: Recipe[] = [];

  recipeDetails!: RecipeDetails;

  constructor(private http: HttpClient) {
  }

  getRecipeDetails(recipe: Recipe): void {
    const id = recipe?.id;

    this.http
      .get<{ data: { recipe: RecipeDetails } }>(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=8d488d17-fae0-474f-a48f-b7eab7d8c57`)
      .pipe(
        pluck('data', 'recipe'),

        catchError(
          err => {
            alert(err.error.error);
            return EMPTY;
          }
        ),
      )
      .subscribe(recipeDetails => this.recipeDetails = recipeDetails);
  }

}

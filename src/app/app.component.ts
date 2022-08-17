import {Component, Input, OnInit} from '@angular/core';
import {catchError, EMPTY, pluck} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "./content/search-result/search-result.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'forkify-demo';
  searchText!: string;
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    console.log('INIT APP')
  }

  onSearchTextChanged(text: string) {
    this.searchText = text;
  }

  getResults() {
    this.http
      .get<{ count: number, data: { recipes: Recipe[] } }>(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${this.searchText}&key=8d488d17-fae0-474f-a48f-b7eab7d8c578`)
      .pipe(
        pluck('data', 'recipes'),

        catchError(
          err => {
            alert(err.error.error);
            return EMPTY;
          }
        ),
      )
      .subscribe(
        recipes => this.recipes = recipes
      );
  }


}

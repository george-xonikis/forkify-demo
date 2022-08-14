import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, map, pluck, tap} from "rxjs";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  PenToSquare = faPenToSquare;
  bookmark = faBookmark;
  MagnifyingGlass = faMagnifyingGlass;

  searchText: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {}

  updateSearchTextValue(text: string) {
    this.searchText = text;
    console.log(this.searchText);
  }

  getResults(event: Event) {
    event.preventDefault();

    console.log('Clicked')

    this.http
      .get<{ count: number, recipes: any[] }>(`https://forkify-api.herokuapp.com/api/search?q=${this.searchText}`)
      .pipe(
        pluck('recipes'),

        // map((recipes: any[]) => {
        //   const newTitle = 'My recipe';
        //   recipes[0].title = newTitle;
        //
        //   return recipes;
        // }),

        catchError(
          err => {
            console.log(err)
            alert(err.error.error);
            return EMPTY;
          }
        ),

        tap((recipes: any[]) => alert(recipes[0].title))

      )
      .subscribe();
  }

}

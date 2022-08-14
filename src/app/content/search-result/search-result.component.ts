import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PASTA_RECIPES } from './mock-recipes';

interface Recipe {
  id: string;
  image_url: string;
  publisher: string;
  title: string;
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResult implements OnInit {
  readonly recipes: Recipe[] = PASTA_RECIPES;
  currentPage: number = 1;
  pageSize: number = 10;
  maxPage!: number;

  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;

  ngOnInit() {
    this.maxPage = Math.ceil(this.recipes.length / this.pageSize) + 1;
  }

  decrementCurrentPage(): void {
    this.currentPage--;
  }

  incrementCurrentPage(): void {
    this.currentPage++;
  }

  getPaginatedResults(): Recipe[] {
    const clonedRecipes = [...PASTA_RECIPES];

    return clonedRecipes.slice(0, 9);

    // DIAVAZEIS TO CURRENT PAGE

    // for(this.currentPage = 1, this.currentPage <= this.maxPage, this.currentPage++){
    //   this.recipes.slice((this.currentPage-1)*this.pageSize,(this.currentPage * this.pageSize)-1)
  }

  getRecipeSlice(recipes, currentPage) {
    return recipes.slice(
      (currentPage - 1) * this.pageSize,
      currentPage * this.pageSize - 1
    );
  }
  // PERNEIS TO SLICE TOU RECIPES ANALOGA APO TO CURRENT PAGE
  // PX EAN currentPage = 1 => SLICE TOU ARRAY 0-9;
  // PX EAN currentPage = 3 => SLICE TOU ARRAY 20-29;
  // return [];
}

import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export interface Recipe {
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
  @Input() recipes: Recipe[] = [];

  currentPage: number = 1;
  pageSize: number = 10;
  maxPage!: number;

  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;

  ngOnInit() {
    this.maxPage = Math.ceil(this.recipes.length / this.pageSize);
    console.log(this.recipes);
    console.log(this.maxPage);
  }

  decrementCurrentPage(): void {
    this.currentPage--;
  }

  incrementCurrentPage(): void {
    this.currentPage++;
  }

  getPaginatedResults(): Recipe[] {
    const clonedRecipes = [...this.recipes];
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = this.currentPage * this.pageSize;
    return clonedRecipes.slice(startIndex, endIndex);
  }
}

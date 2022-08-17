import {Component, Input, OnInit} from '@angular/core';
import {
  faFaceSmile,
  faClock,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {
  faUserGroup,
  faCircleMinus,
  faCirclePlus,
  faCheck,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface Ingredient {

}

export interface RecipeDetails {
  id: string;
  title: string;
  publisher: string;
  sourceUrl: string;
  image_url: string;
  servings: number;
  cooking_time: number;
  ingredients: Ingredient[];
}

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeDetails!: RecipeDetails;

  smileFace = faFaceSmile;
  clock = faClock;
  bookmark = faBookmark;
  persons = faUserGroup;
  minus = faCircleMinus;
  plus = faCirclePlus;
  check = faCheck;
  arrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  smileFace = faFaceSmile;

  constructor() {}

  ngOnInit(): void {}
}

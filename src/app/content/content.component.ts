import {Component, Input} from '@angular/core';
import {Recipe} from "./search-result/search-result.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() recipes: Recipe[] = [];
}

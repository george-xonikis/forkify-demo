import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faPenToSquare, faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  @Output() searchTextChanged = new EventEmitter<string>();
  @Output() searchButtonClicked = new EventEmitter<boolean>();

  PenToSquare = faPenToSquare;
  bookmark = faBookmark;
  MagnifyingGlass = faMagnifyingGlass;

  ngOnInit(): void {
  }

  updateSearchTextValue(text: string): void {
    this.searchTextChanged.emit(text);
  }

  onSearchButtonClicked(event: Event) {
    event.preventDefault();
    this.searchButtonClicked.emit(true);
  }



}

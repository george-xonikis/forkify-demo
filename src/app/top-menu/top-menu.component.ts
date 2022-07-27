import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  PenToSquare = faPenToSquare;
  bookmark = faBookmark;
  MagnifyingGlass = faMagnifyingGlass;

  constructor() {}

  ngOnInit(): void {}
}

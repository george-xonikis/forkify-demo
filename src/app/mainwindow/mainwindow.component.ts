import { Component, OnInit } from '@angular/core';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.scss'],
})
export class MainwindowComponent implements OnInit {
  SmileFace = faFaceSmile;
  constructor() {}

  ngOnInit(): void {}
}

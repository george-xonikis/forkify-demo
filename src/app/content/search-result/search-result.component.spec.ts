import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResult } from './search-result.component';

describe('SidebarComponent', () => {
  let component: SearchResult;
  let fixture: ComponentFixture<SearchResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResult ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

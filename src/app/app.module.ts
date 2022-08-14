import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SearchResult } from './content/search-result/search-result.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeDetailsComponent } from './content/recipe-details/recipe-details.component';
import { ContentComponent } from './content/content.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SearchResult,
    FooterComponent,
    RecipeDetailsComponent,
    ContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

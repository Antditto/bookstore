import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DndModule } from 'ng2-dnd';

import { Ng2SearchPipe } from './shared/filter.pipe';
import { SearchService } from './shared/search.service';

import { AppComponent } from './app.component';
import { SearchCardComponent } from './search/search-card/search-card.component';
import { SearchPageComponent } from './search/search-page/search-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    DndModule.forRoot()
  ],
  providers: [
    SearchService,
    Ng2SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

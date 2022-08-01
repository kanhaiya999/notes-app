import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';
import { ViewNotesComponent } from './notes/view-notes/view-notes.component';
import { EditNotesComponent } from './notes/edit-notes/edit-notes.component';
import { HeaderComponent } from './header/header.component';
import { AllNotesComponent } from './notes/all-notes/all-notes.component';

import { DetailsNotesComponent } from './notes/details-notes/details-notes.component';
import { CardNotesComponent } from './notes/all-notes/card-notes/card-notes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNotesComponent,
    ViewNotesComponent,
    EditNotesComponent,
    HeaderComponent,
    AllNotesComponent,

    DetailsNotesComponent,
    CardNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

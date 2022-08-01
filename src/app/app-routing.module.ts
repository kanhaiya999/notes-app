import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesResolverService } from './notes-resolver.service';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';
import { AllNotesComponent } from './notes/all-notes/all-notes.component';
import { DetailsNotesComponent } from './notes/details-notes/details-notes.component';


const routes: Routes = [
  {
    path: "", component: AllNotesComponent

  },
  {
    path: "addNotes", component: AddNotesComponent

  },
  {
    path: ":id", component: DetailsNotesComponent, resolve: [NotesResolverService]

  },
  {
    path: ":id/edit", component: AddNotesComponent, resolve: [NotesResolverService]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

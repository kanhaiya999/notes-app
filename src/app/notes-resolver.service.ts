import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { NoteServiceService } from './notes/note-service.service';
import { Notes } from './notes/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesResolverService implements Resolve<Notes[]>{

  constructor(private notesSer: NoteServiceService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const notes: Notes[] = this.notesSer.getNotes();
    if (notes.length == 0) {
      return this.notesSer.FetchNotes();
    } else {
      return notes;
    }
  }
}

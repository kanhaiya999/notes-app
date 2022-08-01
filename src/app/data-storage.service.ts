import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { NoteServiceService } from './notes/note-service.service';
import { Notes } from './notes/notes.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient) { }

  storeNote(note: Notes) {
    this.http.post('https://notes-92b8e-default-rtdb.firebaseio.com/notes.json', note)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  storeNotes(notes: Notes[]) {
    this.http.put('https://notes-92b8e-default-rtdb.firebaseio.com/notes.json', notes)
      .subscribe(data => {
        console.log(data);
      })

  }





}

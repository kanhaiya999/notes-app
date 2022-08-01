import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from '../data-storage.service';
import { Notes } from './notes.model';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  notesChange = new Subject<Notes[]>()
  // private notes: Notes[] = [
  //   new Notes('kanhaiya', 'it is used for testing', new Date(2012, 1, 20)),
  //   new Notes('kanhaiya', 'it is used for testing', new Date(1999, 10, 30)),
  //   new Notes('jassi', 'it is used for block chain', new Date(2022, 6, 25))
  // ]

  private notes: Notes[] = [];

  constructor(private dataStorageSer: DataStorageService, private http: HttpClient) { }

  setNotes() {
    this.FetchNotes().subscribe(data => {
      this.notes = data;
      console.log(this.notes)
      this.notesChange.next(this.notes.slice());
    }, error => {
      console.log(error);
    })

  }

  getNotes() {
    return this.notes.slice();
  }

  getNote(id: number) {
    return this.notes[id];
  }

  AddNotes(newNote: Notes) {
    this.notes.push(newNote);
    this.dataStorageSer.storeNotes(this.notes);
    this.notesChange.next(this.notes.slice());
  }

  updateNote(index: number, newNote: Notes) {
    this.notes[index] = newNote;
    this.dataStorageSer.storeNotes(this.notes);

    this.notesChange.next(this.notes.slice());
  }

  deleteNote(id: number) {
    this.notes.splice(id, 1);
    this.dataStorageSer.storeNotes(this.notes);
    this.notesChange.next(this.notes.slice());
  }




  FetchNotes() {
    return this.http.get<{ [key: string]: Notes }>('https://notes-92b8e-default-rtdb.firebaseio.com/notes.json')
      .pipe(
        map(responseData => {
          const PostArray: Notes[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              PostArray.push({ ...responseData[key], id: key })
            }
          }
          return PostArray;
        })
      )
  }
}

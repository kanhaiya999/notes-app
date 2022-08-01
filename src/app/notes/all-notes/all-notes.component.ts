import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoteServiceService } from '../note-service.service';
import { Notes } from '../notes.model';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit, OnDestroy {

  notes: Notes[] = [];
  constructor(private note_service: NoteServiceService) { }
  Subscription: Subscription;
  searchText: any;
  ngOnInit(): void {

    this.Subscription = this.note_service.notesChange.subscribe((note: Notes[]) => {
      this.notes = note;
    })

    this.notes = this.note_service.getNotes();
    // console.log(this.notes);
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

}

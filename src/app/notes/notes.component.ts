import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { NoteServiceService } from './note-service.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteSer: NoteServiceService) { }

  ngOnInit(): void {
    this.noteSer.setNotes();
  }

}

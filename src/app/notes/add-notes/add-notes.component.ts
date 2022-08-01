import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/data-storage.service';
import { NoteServiceService } from '../note-service.service';


@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  id: number;

  editMode = false;

  notesForm: FormGroup
  constructor(private router: Router, private route: ActivatedRoute,
    private noteService: NoteServiceService, private dataStorageSer: DataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;

      this.initForm()
    })
  }

  initForm() {
    let title = '';
    let body = '';
    let date: Date;
    if (this.editMode) {
      const note = this.noteService.getNote(this.id);
      title = note.title;
      body = note.body;
      date = note.date;
    }

    date = new Date();

    this.notesForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'body': new FormControl(body, Validators.required),
      'date': new FormControl(date)
    })

  }

  onSubmit() {

    if (this.editMode) {
      this.noteService.updateNote(this.id, this.notesForm.value);
    } else {
      this.noteService.AddNotes(this.notesForm.value);

    }
    this.router.navigate(['/']);

  }

}

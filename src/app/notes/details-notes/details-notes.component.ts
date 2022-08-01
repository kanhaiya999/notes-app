import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NoteServiceService } from '../note-service.service';
import { Notes } from '../notes.model';

@Component({
  selector: 'app-details-notes',
  templateUrl: './details-notes.component.html',
  styleUrls: ['./details-notes.component.css']
})
export class DetailsNotesComponent implements OnInit {
  id: number;
  note: Notes
  constructor(private route: ActivatedRoute, private router: Router,
    private noteService: NoteServiceService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.note = this.noteService.getNote(this.id)
    })




  }
  EditMode() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  DeleteNote() {
    this.noteService.deleteNote(this.id);
    this.router.navigate(['../'], { relativeTo: this.route })
  }


}

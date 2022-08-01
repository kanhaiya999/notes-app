import { Component, Input, OnInit } from '@angular/core';
import { Notes } from '../../notes.model';

@Component({
  selector: 'app-card-notes',
  templateUrl: './card-notes.component.html',
  styleUrls: ['./card-notes.component.css']
})
export class CardNotesComponent implements OnInit {
  @Input() note: Notes
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {


  }

}

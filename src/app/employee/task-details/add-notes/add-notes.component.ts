import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../../models/note';
import { AddnoteService } from '../../../services/addnote.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})


export class AddNotesComponent implements OnInit {
  notes: Note[];
  newNote = new Note();
  userId = 7;

  @ViewChild(NgForm) noteForm: NgForm;

  constructor(private addNoteService: AddnoteService) { }

  ngOnInit() {
    this.getNotes();
  }


  getNotes() {
    this.addNoteService.getNote(this.userId)
      .subscribe(notes => {
        this.notes = notes;
        console.log(this.notes);
      });
  }

  onSubmit() {
    this.newNote.Employee_emp_id = this.userId;
    this.addNoteService.postNote(this.newNote)
      .subscribe(res => {
        console.log(res[0]);
        this.notes.push(res[0]);
        console.log(this.notes);
      });
    this.clearValues();
  }

  private clearValues() {
    this.noteForm.resetForm();
  }

}

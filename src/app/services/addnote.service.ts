import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';


@Injectable({
  providedIn: 'root'
})
export class AddnoteService {

  private _url = 'http://localhost:3000/api/note/';

  constructor(private _http: HttpClient) { }

  getNote(userId: number): Observable<Note[]> {
    return this._http.get<Note[]>(this._url + 'note/' + userId);

  }

  postNote(note: Note): Observable<Note> {
    return this._http.post<Note>(this._url + 'add-note', note);
  }

}

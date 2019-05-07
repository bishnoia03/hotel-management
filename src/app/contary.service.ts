import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ContaryService {
  private url = 'https://gist.github.com/keeguon/2310008';
  constructor(private http: Http) { }
  getname() {
return this.http.get(this.url);
  }
}

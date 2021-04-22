import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  
  public GetOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  }
}

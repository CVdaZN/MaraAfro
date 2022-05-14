import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agenda } from './../models/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

private readonly API = '/assests/agenda.json';


  constructor(private httpClient: HttpClient ) { }

  list(){
    return this.httpClient.get<Agenda[]>(this.API);
  }

}

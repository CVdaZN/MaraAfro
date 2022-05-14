import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Agenda } from './../models/agenda';
import { AgendaService } from './../services/agenda.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class  AgendarComponent implements OnInit {


  constructor(private agendaService: AgendaService ) {
    this.agendar = this.agendaService.list();

  }

  agendar: Observable<Agenda[]>;
  displayedColumns = ['nome','servico'];


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Resto } from '../model/resto';
import { RestoService } from '../service/resto.service';

@Component({
  selector: 'app-all-resto',
  templateUrl: './all-resto.component.html',
  styleUrls: ['./all-resto.component.css']
})
export class AllRestoComponent implements OnInit {

  resto$:Observable<Resto[]>
  constructor(private restoService:RestoService) { }

  ngOnInit(): void {
    this.resto$=this.restoService.getResto()
    console.warn("Server Working")
  }

}

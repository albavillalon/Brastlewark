import { Component, OnInit } from '@angular/core';
import { GnomosService } from '../../services/gnomos.service';

@Component({
  selector: 'app-gnomos',
  templateUrl: './gnomos.component.html',
  styleUrls: ['./gnomos.component.css']
})
export class GnomosComponent implements OnInit {
  gnomos: any[] = [];

  constructor(private _gnomoService: GnomosService) {
     this._gnomoService.getGnomos()
     .subscribe( data => {
       this.gnomos = data;
     });

  }

  ngOnInit() {
  }

}

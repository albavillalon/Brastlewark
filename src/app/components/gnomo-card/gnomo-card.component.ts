import { Component, OnInit } from '@angular/core';
import { GnomosService } from '../../services/gnomos.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gnomo-card',
  templateUrl: './gnomo-card.component.html',
  styleUrls: ['./gnomo-card.component.css']
})
export class GnomoCardComponent implements OnInit {
  gnomo = {};
  gnomos = [];
  id: Number;

  constructor(private _gnomoService: GnomosService, private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params
      .subscribe( params => {
        this.id = Number(params['id']);
        this._gnomoService.getGnomos()
        .subscribe( data => {
          this.gnomos = data;
          for (const gnm of this.gnomos) {
              if (gnm.id === this.id) {
                this.gnomo = gnm;
                const name = this.gnomo['name'].split(' ');
                if (name[0].endsWith('a') || name[0].endsWith('i')) {
                  this.gnomo['gender'] = 'Feminine';
                } else {
                  this.gnomo['gender'] = 'Masculine';
                }
                break;
              }
          }
        });
      });
  }

  ngOnInit() {
  }
}

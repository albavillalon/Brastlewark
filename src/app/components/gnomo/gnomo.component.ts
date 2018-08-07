import { Component, OnInit } from '@angular/core';
import { GnomosService } from '../../services/gnomos.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { faBriefcase, faUserFriends, faFemale, faMale, faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gnomo',
  templateUrl: './gnomo.component.html',
  styleUrls: ['./gnomo.component.css']
})
export class GnomoComponent implements OnInit {
  gnomo = {};
  gnomos = [];
  id: Number;
  faBriefcase = faBriefcase;
  faUserFriends = faUserFriends;
  faFemale = faFemale;
  faMale = faMale;
  faIdCard = faIdCard;


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

  goFriend(name: string) {
    for (const gnm of this.gnomos) {
      if (gnm.name === name) {
        this.router.navigate(['/gnomo', gnm.id]);
        break;
      }
    }
  }
}

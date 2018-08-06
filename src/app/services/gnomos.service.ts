import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GnomosService {
  gnomosURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
  gnomos = [];
  constructor(private _http: Http) { }

   getGnomos() {
    return this._http.get(this.gnomosURL)
    .pipe(map(resp => {
      const gnomosServer = resp.json();
      this.gnomos = gnomosServer['Brastlewark'];
      return this.gnomos;
    }));
  }
    // getGnomoById(id) {
    //   const idGnomo = Number(id);
    //   if (this.gnomos.length === 0) {
    //     this.getGnomos()
    //     .subscribe( data => {
    //       this.gnomos = data;
    //       for (const gnomo of this.gnomos) {
    //         if (gnomo.id === idGnomo) {
    //          return gnomo;
    //         }
    //     }
    //     });
    //   } else {
    //     for (const gnomo of this.gnomos) {
    //       if (gnomo.id === idGnomo) {
    //        return gnomo;
    //       }
    //     }
    //   }
    // }


}

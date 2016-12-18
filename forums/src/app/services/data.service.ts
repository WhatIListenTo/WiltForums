import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import 'rxjs/add/operator/cache';

@Injectable()
export class DataService {

  constructor(private http: HttpService) {}

  public getNewestThread() {
    let req = this.http.get('threads/?get=newest').cache();
    req.subscribe();
    return req;
  }
}

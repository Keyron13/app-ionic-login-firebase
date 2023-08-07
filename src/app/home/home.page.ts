import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { AuthService} from './../service/auth.service'
import { state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  constructor(private auth:AuthService, private router:Router) {}

  async logout(){
    await this.auth.logout();
    this.router.navigate(['/login']);
  }

}

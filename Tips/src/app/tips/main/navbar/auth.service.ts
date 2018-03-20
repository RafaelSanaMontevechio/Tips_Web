import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable()
export class AuthService {

  private userAutenticado: boolean = false;

  constructor(private router: Router) { }

    fazerLogin(user: User){

      if(user.email === 'user@email.com' && user.pass === '123456'){

        this.userAutenticado = true;
        this.router.navigate(['../search/complete-search'])
      }
      else{
        this.userAutenticado = false;
      }
    }

}

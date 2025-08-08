import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenService } from '../servicios/authen.service';

export const authentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authentication = inject(AuthenService);
  if(authentication.inicioSesion()) {
    return true;
  }else{
    localStorage.setItem('redirectUrl', state.url);
    return router.parseUrl('/registro');
  }
};

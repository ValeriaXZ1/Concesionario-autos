import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthenService } from '../servicios/authen.service';

export const loginGuard: CanMatchFn = (route, segments) => {
  const authentication = inject(AuthenService);
  return !authentication.inicioSesion() ;
};

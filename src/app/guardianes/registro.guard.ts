import { CanDeactivateFn } from '@angular/router';
import { RegistroComponent } from '../componentes/registro/registro.component';

export const registroGuard: CanDeactivateFn<RegistroComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.formularioRegistro()) {
    return confirm('¿Estás seguro de que quieres salir? Los cambios no guardados se perderán.');
  }
  return true;
};

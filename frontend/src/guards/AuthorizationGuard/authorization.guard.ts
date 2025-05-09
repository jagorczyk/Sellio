import {CanActivateFn, Router} from '@angular/router';
import {AuthorizationService} from '../../services/AuthorizationService/authorization.service';
import {inject} from '@angular/core';
import {map} from 'rxjs';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const AuthService = inject(AuthorizationService);
  const router = inject(Router);

  return AuthService.isTokenValid(AuthService.getToken()).pipe(
    map(tokenValidity => {
      if (state.url === "/authorization") {
        if (tokenValidity) {
          return router.createUrlTree(["/navigation"]);
        } else {
          return true;
        }
      }
      return true;
    })
  )
};

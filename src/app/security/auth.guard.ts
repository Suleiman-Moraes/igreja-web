import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../shared/services/authentication.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.authenticationService.isAccessTokenInvalido()) {
            return this.authenticationService.obterNovoAccessToken().then(() => {
                if (this.authenticationService.isAccessTokenInvalido()) {
                    this.router.navigate(['/login']);
                    return false;
                }
                return true;
            });
        }

        if (!this.authenticationService.isAccessTokenInvalido()) {
            if (route.data.roles) {
                if (this.authenticationService.temQualquerPermissao(route.data.roles)) {
                    return true;
                }
                this.router.navigate(['/404']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
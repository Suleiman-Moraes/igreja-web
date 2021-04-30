import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { from, Observable, of, throwError } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AuthenticationService } from "../shared/services/authentication.service";

export class NotAuthenticatedError { }

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.isConstemUrlSemToken(req.url) && this.authenticationService.isAccessTokenInvalido()) {
            return from(this.authenticationService.obterNovoAccessToken())
                .pipe(
                    mergeMap(() => {
                        if (this.authenticationService.isAccessTokenInvalido()) {
                            throw new NotAuthenticatedError();
                        }
                        req = this.getHeaders(req);
                        return next.handle(req);
                    })
                );
        }
        return next.handle(req);
    }

    private getHeaders(request, token?): any {
        token = token ? token : sessionStorage.getItem('token');
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + atob(token)
            }
        });
    }

    private isConstemUrlSemToken(url: string): boolean {
        return url.includes('https://viacep.com.br/ws/') || url.includes('/oauth/token');
    }

    // PROTECTED METHODS
    private handleError(error: any): Observable<any> {
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return throwError(error);
    }
}
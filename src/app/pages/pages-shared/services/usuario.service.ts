import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SyncRequestClient } from 'ts-sync-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private route: string;

  constructor(private http: HttpClient) {
    this.route = `${environment.API_URL}/api/usuario`;
  }

  findUsuarioLogadoDtoBy(): Observable<any> {
    return this.http.get<any>(`${this.route}/me`).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  getUsuario(): any {
    if (sessionStorage.getItem('user')) {
      return JSON.parse(sessionStorage.getItem('user'));
    }
    else {
      const user = new SyncRequestClient()
        .addHeader('Authorization', `Bearer ${atob(sessionStorage.getItem('token'))}`)
        .get<any>(`${this.route}/me`);
      sessionStorage.setItem('user', JSON.stringify(user));
      return user;
    }
  }

  // PRIVATE METHODS
  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}

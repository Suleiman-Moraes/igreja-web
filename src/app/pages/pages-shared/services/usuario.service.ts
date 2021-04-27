import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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

  // PRIVATE METHODS
  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {
  private route: string = `${environment.API_URL}/api/grafico`;

  constructor(
    private http: HttpClient
  ) { }

  montarGraficoAnual(ano): Observable<any>{
    ano = ano ? ano : 0;
    return this.getUtil(`${this.route}/anual?ano=${ano}`);
  }

  // PRIVATE METHODS
  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }

  private getUtil(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    )
  }
}

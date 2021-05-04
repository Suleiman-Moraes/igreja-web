import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/components/base-resource-service/base-resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntradaService extends BaseResourceService {
  private route: string = `${environment.API_URL}/api/entrada`;

  private subject = new BehaviorSubject<any>(null);

  constructor(protected injector: Injector) {
    super(`${environment.API_URL}/api/entrada`, injector);
  }

  findByParams(filterForm: any): Observable<any> {
    return this.http.post(`${this.route}/params`, filterForm).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  getInformacao(filterForm: any): Observable<any> {
    return this.http.post(`${this.route}/info`, filterForm).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  ativar(id): Observable<any> {
    return this.http.put(`${this.apiPath}/ativar/${id}`, null).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  inserirDizimo(pessoaId, valor): Observable<any> {
    return this.http.post(`${this.apiPath}/dizimo/${pessoaId}?valor=${valor}`, null).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  sendData(data: any): void {
    this.subject.next(data);
  }

  getData() {
    return this.subject;
  }
}

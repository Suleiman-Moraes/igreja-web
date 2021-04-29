import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/components/base-resource-service/base-resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService extends BaseResourceService {
  private route: string = `${environment.API_URL}/api/cargo`;

  constructor(protected injector: Injector) {
    super(`${environment.API_URL}/api/cargo`, injector);
  }

  // findByParams(filterForm: any): Observable<any> {
  //   return this.http.post(`${this.route}/params`, filterForm).pipe(
  //     map((res: any) => res),
  //     catchError(this.handleError)
  //   );
  // }

  // ativar(id): Observable<any> {
  //   return this.http.put(`${this.route}/ativar/${id}`, null).pipe(
  //     map((res: any) => res),
  //     catchError(this.handleError)
  //   );
  // }
}

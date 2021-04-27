import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/components/base-resource-service/base-resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends BaseResourceService {
  private route: string = `${environment.API_URL}/api/pessoa`;

  constructor(protected injector: Injector) {
    super(`${environment.API_URL}/api/pessoa`, injector);
  }

  updateMe(resource: any): Observable<any> {
    return this.http.put(`${this.route}/me`, resource).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  findByIdMe(): Observable<any> {
    return this.getUtil(`${this.route}/me/id`);
  }
}
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/components/base-resource-service/base-resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseResourceService {
  private route: string = `${environment.API_URL}/api/menu`;

  constructor(protected injector: Injector) {
    super(`${environment.API_URL}/api/menu`, injector);
  }

  findBy(): Observable<any> {
    return this.http.get(`${this.route}/ativo`).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }
}

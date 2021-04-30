import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/components/base-resource-service/base-resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoEntradaService extends BaseResourceService {
  private route: string = `${environment.API_URL}/api/tipoentrada`;

  constructor(protected injector: Injector) {
    super(`${environment.API_URL}/api/tipoentrada`, injector);
  }
}

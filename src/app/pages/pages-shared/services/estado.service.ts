import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/components/base-resource-service/base-resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService extends BaseResourceService {
  private route: string = `${environment.API_URL}/api/estado`;

  constructor(protected injector: Injector) {
    super(`${environment.API_URL}/api/estado`, injector);
  }
}

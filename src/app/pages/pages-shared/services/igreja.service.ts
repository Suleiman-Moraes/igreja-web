import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/components/base-resource-service/base-resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IgrejaService extends BaseResourceService {
  private route: string = `${environment.API_URL}/api/igreja`;

  constructor(protected injector: Injector) {
    super(`${environment.API_URL}/api/igreja`, injector);
  }
}

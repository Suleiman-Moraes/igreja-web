import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/components/base-resource-service/base-resource.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService extends BaseResourceService {
  private route: string = `${environment.API_URL}/api/endereco`;

  constructor(protected injector: Injector) {
    super(`${environment.API_URL}/api/endereco`, injector);
  }

  carregarEnderecoCorreio(cep: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }
}

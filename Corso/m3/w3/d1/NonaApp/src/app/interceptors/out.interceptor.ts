import { Injectable } from '@angular/core';
import {
  HttpRequest,
  // gestira l'event
  HttpHandler,
  // evento è observable
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs'; // si importa orperatore tap per gistire una chiamata lla volta per cristallizzare(?) il tipo dell'oggetto chiamata(tap è un monotypeoperator)

@Injectable()
export class OutInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('ti sto intercettando da out interceptor', request);
    const newReq = request.clone({
      // la modifica della richiesta si fa in un clone! imposta headers con outt-> firma e secredId->xyz
      // la rishiesta in uscita se deve esere modificata, non viene utlizzata cosi comè, ma viene clonata e si modificherà la nuova rischiesta che sarà l'effettiva rischiesta in uscita!
      headers: request.headers.append('Out', 'secretID').append('firma', 'xyz'),
    });

    return next.handle(newReq).pipe(
      tap((event) => {
        // http handdler(gestore dellechimate http) gesitrà la nuova chiamata, instradando la risposta in un evento gestito tramite l'operatore tap
        console.log('nuova richiesta: ', newReq);
        console.log(
          'sono la risposta della chiamata da out interceptors',
          event
        );
      })
    );
  }
}

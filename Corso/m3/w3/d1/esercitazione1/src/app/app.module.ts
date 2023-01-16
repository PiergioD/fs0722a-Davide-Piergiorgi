import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebugInterceptor } from './interceptors/debug.interceptor';
import { ContatoreComponent } from './components/contatore/contatore.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DebugInterceptor,
      multi:true
  }
],
  bootstrap: [AppComponent]
})

export class AppModule {

}

/**import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
    constructor() {
    }
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log("Passed through the interceptor in request");
        return next.handle(request)
            .pipe(
                map(res => {
                    console.log("Passed through the interceptor in response");
                    return res
                }),catchError((error: HttpErrorResponse) => {
                  let errorMsg = '';
                  if (error.error instanceof ErrorEvent) {
                      console.log('This is client side error');
                      errorMsg = `Error: ${error.error.message}`;
                  } else {
                      console.log('This is server side error');
                      errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                  }
                  console.log(errorMsg);
                  return throwError(errorMsg);
              })
          )
  }
}
 */

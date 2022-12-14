import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ContactUsService {

  public APP_NAME: string = 'Give The Need';

  constructor(
    private http: HttpClient
  ) {

  }

  post(path: string, body: any, httpOptions: any = {}) {
    let baseUrl = environment.baseUrl;
    return this.http.post(`${baseUrl}${path}`, body);
  }
}

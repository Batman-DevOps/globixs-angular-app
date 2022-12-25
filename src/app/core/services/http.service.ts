import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

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

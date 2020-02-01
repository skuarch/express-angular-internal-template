import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HeadersService } from './headers.service';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(
        private http: HttpClient,
        private headersService: HeadersService
    ) { }

    get(url: string): Observable<any> {
        if (!url) {
            throw new Error('url is undefinied');
        }
        const source = this.http.get(url, this.headersService.getAuthHeaders());
        const pipe = source
            .pipe(
                catchError(err => {
                    const e = `error HttpService.get(): ` +
                        `code: ${err.error.code} ` +
                        `error: ${err.error.message} ` +
                        `statusText: ${err.statusText} ` +
                        `message: ${err.message} ` +
                        `status: ${err.status} ` +
                        `url: ${err.url}`;
                    console.log(e);
                    throw err;
                })
            );
        return pipe;
    }

    post(url: string, data: any): Observable<any> {
        if (!url) {
            throw new Error('url is undefinied');
        }
        const source = this.http.post(url, data, this.headersService.getAuthHeaders());
        const pipe = source
            .pipe(
                catchError(err => {
                    const e = `error HttpService.post():` +
                        `code: ${err.error.code} ` +
                        `error: ${err.error.message} ` +
                        `statusText: ${err.statusText} ` +
                        `message: ${err.message} ` +
                        `status: ${err.status} ` +
                        `url: ${err.url}`;
                    console.log(e);
                    throw err;
                })
            );
        return pipe;
    }

}

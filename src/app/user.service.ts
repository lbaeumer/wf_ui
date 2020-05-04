import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>('https://service-dot-luitest123.appspot.com/ws/user/list');
    }

    insertUser(user: any): Observable<any> {
        return this.http.post<any>('https://service-dot-luitest123.appspot.com/ws/user/insert', user);
    }

}

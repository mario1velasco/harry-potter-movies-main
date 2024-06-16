import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    // * Injectors
//  private http =  inject(HttpClient);

 constructor(private http: HttpClient) {}


//  *******************
//  ****** Methods ****
//  *******************
 get(url: string) {
    // return this.http.request(method, request_params.url, request_params);
    return this.http.request('GET', url);
    // return this.http.get(url);
 }
}
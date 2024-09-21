import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export abstract class APIService {

  // globalServerPath: string = "http://192.168.1.7:8080";
  globalServerPath: string = "https://panchayat-production.up.railway.app";

  constructor(public http: HttpClient) {
  }

  doHttpPost(servicePath: string, param?: any): Observable<any> {
    return this.http.post(this.globalServerPath + servicePath, param);
  }

  doHttpGet(servicePath: string, param?: any): Observable<any> {
    return this.http.get(this.globalServerPath + servicePath, param);
  }

  uploadFile(servicePath: string, file: File) {
    const formData = new FormData();
    formData.append("file", file);
    const upload$ = this.http.post(this.globalServerPath + servicePath, formData);
    return upload$;
  }

}



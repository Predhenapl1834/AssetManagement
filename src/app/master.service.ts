import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseUrl = 'http://localhost:3963//api';

  constructor(private http: HttpClient) { }
  public getAssetOrders(): Observable<any>{
    return this.http.get(this.baseUrl+ '/AssetMaster');
  }
}

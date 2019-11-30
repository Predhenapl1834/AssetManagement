import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private baseUrl = 'http://localhost:3963//api';

  constructor(private http: HttpClient) { }
  getVendorList(): Observable<any> {
    return this.http.get(this.baseUrl + '/Vendor');
  }
  deleteVendor(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/Vendor/'+id);
  }
  addVendor(v: Vendor) {
    return this.http.post(this.baseUrl + '/Vendor/', v);
  }
  getAssetType():Observable<any>{
    return this.http.get(this.baseUrl+'/AssetType');
  }
  getAssetTypes(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/AssetType/'+id);
  }
  updateVendor(id: number,vendor: Vendor)
  {
    return this.http.put(this.baseUrl+'/Vendor/'+id,vendor);
  }
  getVendor(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/Vendor/'+id);
  }
  putVendor(id:number,vendor:Vendor):Observable<any>{
    return this.http.put(this.baseUrl+'/Vendor/'+id,vendor);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Purchase } from './purchase';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl = 'http://localhost:3963//api';
  constructor(private http:HttpClient) { }
  getAssettypes(na: string): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetType?na='+na);
  }

  getAllAssettypes(): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetType');
  }

  getVendors(id: number): Observable<any>{
    return this.http.get(this.baseUrl+'/Purchase/'+ id);
  }

  getAsset(na: string): Observable<any>{
    return this.http.get(this.baseUrl+'/AssetDef?na='+na);
  }

  postPurchase(po: Purchase){
    return this.http.post(this.baseUrl+'/Purchase/',po);
  }
  getpurchaseList(): Observable<any> {
    return this.http.get(this.baseUrl + '/Purchase/');
}
getPurchase(id:number):Observable<any>{
  return this.http.get(this.baseUrl+'/PurchaseEdit/'+id);
}

updatePurchase(id:number,purchase:Purchase):Observable<any>{
  return this.http.put(this.baseUrl+'/Purchase/'+id,purchase);
}
cancelPurchase(id:number):Observable<any>{
  return this.http.delete(this.baseUrl+'/Purchase/'+id);
}
searchPurchase(name:string):Observable<any>{
  return this.http.get(this.baseUrl+'/Purchase?name='+name);
}
}
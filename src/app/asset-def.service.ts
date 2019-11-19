import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDef } from './asset-def';
import { AssetListComponent } from './asset-list/asset-list.component';

@Injectable({
  providedIn: 'root'
})
export class AssetDefService {
  private baseUrl = 'http://localhost:11386//api';
  constructor(private http: HttpClient) { }

  getAssetList(): Observable<any> {
    return this.http.get(this.baseUrl + '/assetDefs');
  }
  deleteAsset(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/assetDefs/'+id);
  }
  getAsset(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/assetDefs/'+id);
  }
  updateAsset(id: number,asset: AssetDef)
  {
    return this.http.put(this.baseUrl+'/assetDefs/'+id,asset);
  }
  addAsset(pdt:AssetDef)
  {
    
    return this.http.post(this.baseUrl+'/assetDefs',pdt);
  }

}

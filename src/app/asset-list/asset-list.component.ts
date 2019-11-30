import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AssetDef } from '../asset-def';
import { AssetDefService } from '../asset-def.service';
import { Router } from '@angular/router';
import { AssetType } from '../asset-type';
@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  assettype:Observable<AssetType[]>
  assets: Observable<AssetDef[]>;
  

  constructor(private assetdefService: AssetDefService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.assettype = this.assetdefService.getAssetType();
    this.assets = this.assetdefService.getAssetList();

}
deleteAsset(id:number){
  if(confirm('Do you want to delete this record?'))
  {
    this.assetdefService.deleteAsset(id).subscribe(data=>{
     
      console.log(data);
    })
  }

}

}
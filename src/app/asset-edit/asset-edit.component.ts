import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AssetDefService } from '../asset-def.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetDef } from '../asset-def';
import { Observable } from 'rxjs';
import { AssetType } from '../asset-type';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {
  assetForm: FormGroup;
  asset: AssetDef = new AssetDef();
  assettypes: Observable<AssetType[]>;
  assets:Observable<AssetDef[]>;
  

  constructor(private formBuilder: FormBuilder, private service: AssetDefService, private route: ActivatedRoute,
    private toastr: ToastrService) { }
    ad_id: number;
    pdt:any;

  ngOnInit() {
    this.ad_id=this.route.snapshot.params["id"];
    this.assetForm=this.formBuilder.group({
      ad_id: [Validators.required],
      ad_name: [Validators.compose([Validators.required])],
      ad_type_id: [Validators.compose([Validators.required])],
      ad_class: [Validators.compose([Validators.required])]
    }); 
  
    this.service.getAsset(this.ad_id).subscribe(x=>{
      this.asset=x;
    }); 
    this.assettypes=this.service.getAssetType();
    

    
  }

  get formControls(){
    return this.assetForm.controls;
  
  }

  updateasset()
    {
  
      this.asset.ad_id=this.ad_id;
      this.asset.ad_name=this.assetForm.controls.ad_name.value;
      this.asset.ad_type_id=this.assetForm.controls.ad_type_id.value;
      this.asset.ad_class=this.assetForm.controls.ad_class.value;
      this.service.updateAsset(this.ad_id,this.asset).subscribe(res=>{
        this.toastr.success('Asset Updated');
      });

    }

  }



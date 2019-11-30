import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AssetType } from '../asset-type';
import { VendorService } from '../vendor.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.scss']
})
export class EditvendorComponent implements OnInit {
  vendor: Vendor;
  vendorForm: FormGroup;
  assettypes: Observable<AssetType[]>;
  vendors:Observable<Vendor[]>;
  
  id:number;
  vdr: any;

  constructor(private service: VendorService, private route: ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    this.vendorForm=this.formBuilder.group({
      vd_id:null,
      vd_name: ['',Validators.compose([Validators.required])],
      vd_type:'supplier',
      vd_atype_id: ['',Validators.compose([Validators.required])],
      vd_from: ['',Validators.compose([Validators.required])],
      vd_to: ['',Validators.compose([Validators.required])],
      vd_addr: ['',Validators.compose([Validators.required])]
    }); 
    this.assettypes = this.service.getAssetType();
    this.service.getVendor(this.id).subscribe(x=>{
      this.vendor=x;
    }); 
    
  }
  get formControls(){
    return this.vendorForm.controls;
  
  }

  updateVendor(){
      
      this.vendor.vd_id=this.id;
      this.vendor.vd_name=this.vendorForm.controls.vd_name.value;
      this.vendor.vd_type=this.vendorForm.controls.vd_type.value;
      this.vendor.vd_atype_id=this.vendorForm.controls.vd_atype_id.value;
      this.vendor.vd_from=this.vendorForm.controls.vd_from.value;
      this.vendor.vd_to=this.vendorForm.controls.vd_to.value;
      this.vendor.vd_addr=this.vendorForm.controls.vd_addr.value;
      this.service.updateVendor(this.id,this.vendor).subscribe();
        this.toastr.success('Vendor Updated');
      

    }

}

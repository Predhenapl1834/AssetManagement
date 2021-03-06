import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetType } from '../asset-type';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.scss']
})
export class AddvendorComponent implements OnInit {
  vendorForm: FormGroup;
  vendor: Vendor = new Vendor();
  id: number;
  assettypes:Observable<AssetType[]>;
  constructor(private formBuilder: FormBuilder,private router: Router, private toastr: ToastrService,private vendorService:VendorService) { }

  ngOnInit() {
   
  this.vendorForm = this.formBuilder.group({
    vd_name: ['', Validators.compose([Validators.required])],
    vd_type: 'Supplier',
    vd_atype_id: ['', Validators.compose([Validators.required])],
    vd_from: ['', Validators.compose([Validators.required])],
    vd_to: ['', Validators.compose([Validators.required])],
    vd_addr: ['', Validators.compose([Validators.required])],

  });
  this.assettypes=this.vendorService.getAssetType();
  }
  reloadData() {
  
  }
  addVendor(){
    this.vendor.vd_name = this.vendorForm.controls.vd_name.value;
    this.vendor.vd_type = this.vendorForm.controls.vd_type.value;
    this.vendor.vd_atype_id = this.vendorForm.controls.vd_atype_id.value;
    this.vendor.vd_from = this.vendorForm.controls.vd_from.value;
    this.vendor.vd_to = this.vendorForm.controls.vd_to.value;
    this.vendor.vd_addr = this.vendorForm.controls.vd_addr.value;
  
  
    this.vendorService.addVendor(this.vendor).subscribe(res=>{
      if(res==1)
      {
        this.toastr.success('Added Successfully','Success');
  
     }
      else
      {
        this.toastr.error("Vendor already exist");
      }
    });
  
    this.ngOnInit();
  
  }
}

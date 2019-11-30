import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { AssetType } from '../asset-type';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-purchase-manager',
  templateUrl: './purchase-manager.component.html',
  styleUrls: ['./purchase-manager.component.scss']
})
export class PurchaseManagerComponent implements OnInit {
  purchaseForm: FormGroup;
  assettypes: Observable<AssetType[]>;
  vendors: Observable<Vendor[]>;
  assetId: number;
  purchase:Purchase=new Purchase();
  

  constructor(private purchaseService: PurchaseService, 
    private router: Router, private formBuilder: FormBuilder, private toastr:ToastrService,private authService: AuthService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){

    this.purchaseForm=this.formBuilder.group({
      pd_order_no : [+Math.floor((Math.random() * 10000) + 1),Validators.compose([Validators.required])],
   
      pd_atype_id: ['',Validators.compose([Validators.required])],
      pd_qty: ['',Validators.compose([Validators.required])],
      pd_vendor_id: ['',Validators.compose([Validators.required])]
     
     
    });


    
    
    
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');

  }

  onOptionsSelected(value: number){
    this.vendors=this.purchaseService.getVendors(value);
      this.purchaseService.getVendors(value).subscribe(data=>{
        console.log("vendor",data);
      })
    this.vendors.forEach(x=>{
      console.log(x);
    })

  }

  searchAssetType(na: string){
    this.assettypes=this.purchaseService.getAssettypes(na);
    this.purchaseService.getAsset(na).subscribe(res=>{
    res.forEach(element => {
      this.assetId=element["ad_id"];
      console.log(this.assetId);
           
      });

    })
    
  }

  addOrder(){
    console.log(this.assetId);

    this.purchase.pd_order_no=this.purchaseForm.controls.pd_order_no.value;
    this.purchase.pd_ad_id=this.assetId; 
    this.purchase.pd_qty=this.purchaseForm.controls.pd_qty.value;
    this.purchase.pd_atype_id=this.purchaseForm.controls.pd_atype_id.value;
    console.log(this.purchase.pd_atype_id);
    this.purchase.pd_vendor_id=this.purchaseForm.controls.pd_vendor_id.value;
    
    this.purchase.pd_status='PO-Raised with Supplier';

    this.purchaseService.postPurchase(this.purchase).subscribe(res=>{
      this.toastr.success('Order Placed');

          })

  }

}

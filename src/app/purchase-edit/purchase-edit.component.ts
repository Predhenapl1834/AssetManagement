import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PurchaseService } from '../purchase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.scss']
})
export class PurchaseEditComponent implements OnInit {
  purchase: Purchase = new Purchase();
  purchaseForm: FormGroup;
  id:number;

  constructor(private service: PurchaseService, private router:Router, private authService:AuthService, private route: ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];

    this.purchaseForm=this.formBuilder.group({
      pd_id:'',
      pd_order_no : ['',Validators.compose([Validators.required])],
      pd_ad_name: ['',Validators.compose([Validators.required])],
      pd_atype_name: ['',Validators.compose([Validators.required])],
      pd_qty: ['',Validators.compose([Validators.required])],
      pd_vendor_name: ['',Validators.compose([Validators.required])],
      pd_status: ['',Validators.compose([Validators.required])],
      pd_dateStr: ['',Validators.compose([Validators.required])],
      pd_ddateStr: ['',Validators.compose([Validators.required])]
    }); 

    this.service.getPurchase(this.id).subscribe(x=>{
      this.purchase=x;
    })

  }


  get formControls(){
    return this.purchaseForm.controls;
  }

  updatePurchase(){
    this.purchase.pd_id=this.id;
    this.purchase.pd_date=this.purchaseForm.controls.pd_dateStr.value;
    this.purchase.pd_ddate=this.purchaseForm.controls.pd_ddateStr.value;
    this.purchase.pd_status='Consignment Received';
    this.purchase.pd_order_no=this.purchaseForm.controls.pd_order_no.value;
    this.purchase.pd_ad_id=this.purchase.pd_ad_id;
    this.purchase.pd_qty=this.purchase.pd_qty;
    this.purchase.pd_atype_id=this.purchase.pd_atype_id;
    this.purchase.pd_vendor_id=this.purchase.pd_vendor_id;
    if(this.purchase.pd_date<this.purchase.pd_ddate)
    {
      this.service.updatePurchase(this.id, this.purchase).subscribe(res=>{
        this.toastr.success('Purchase Updated');
        this.router.navigateByUrl("plist");
      });
    }
    else
    {
      this.toastr.warning('Purchase date must be less than Delivery date');
    }

  }

  cancelOrder(value: number){

  }
 }



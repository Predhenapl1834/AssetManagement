import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Purchase } from '../purchase';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.scss']
})
export class PurchaselistComponent implements OnInit {

  public popoverTitle: string = 'Cancel Order???';
  public popoverMessage: string = 'If sure, click Confirm...';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  purchase: Observable<Purchase>;
  purchases: Observable<Purchase[]>;

  constructor(private authService:AuthService,private purchaseservice: PurchaseService,private router: Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
     this.purchases=this.purchaseservice.getpurchaseList();
    this.purchases.forEach(x=>{
      x.forEach(element=>{
        console.log(element["pd_ad_name"]);
      })
    })
}
Logout(){
  this.authService.logout();
  this.router.navigateByUrl('logout');

}
cancelOrder(id: number){
  this.purchaseservice.cancelPurchase(id).subscribe(res=>{
    this.toastr.success('Order Cancelled');
    this.reloadData();
  })

}
}

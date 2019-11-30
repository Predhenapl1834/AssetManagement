import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../purchase';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-assetmaster',
  templateUrl: './assetmaster.component.html',
  styleUrls: ['./assetmaster.component.scss']
})
export class AssetmasterComponent implements OnInit {
  purchases: Observable<Purchase[]>;

  constructor(private authService:AuthService, private toastr: ToastrService, private router:Router, private masterOrderService: MasterService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.purchases=this.masterOrderService.getAssetOrders();
  }
  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }

}

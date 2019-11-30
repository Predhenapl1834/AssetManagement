import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listvendor',
  templateUrl: './listvendor.component.html',
  styleUrls: ['./listvendor.component.scss']
})
export class ListvendorComponent implements OnInit {

  vendor: Observable<Vendor>;
  vendors: Observable<Vendor[]>;

  constructor(private vendorService: VendorService,
    private router: Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {

    this.vendor = this.vendorService.getVendorList();
    this.vendors = this.vendorService.getVendorList();

}
deleteVendor(id:number){
  if(confirm('Do you want to delete this record?'))
  {
    this.vendorService.deleteVendor(id).subscribe(data=>{
      this.toastr.error("deleted successfully !!!!!");
      console.log(data);
      this.reloadData();
    })
  }
}
}
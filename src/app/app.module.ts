import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetdefComponent } from './assetdef/assetdef.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AdminComponent } from './admin/admin.component';
import { PurchaseManagerComponent } from './purchase-manager/purchase-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {  NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { ListvendorComponent } from './listvendor/listvendor.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { PurchasemanagerComponent } from './purchasemanager/purchasemanager.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AssetmasterComponent } from './assetmaster/assetmaster.component';
@NgModule({
  declarations: [
    AppComponent,
    AssetdefComponent,
    AssetListComponent,
    AssetEditComponent,
    AdminComponent,
    PurchaseManagerComponent,
    LoginComponent,
    UserComponent,
    AddvendorComponent,
    EditvendorComponent,
    ListvendorComponent,
    PurchaselistComponent,
    PurchasemanagerComponent,
    PurchaseEditComponent,
    AssetmasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

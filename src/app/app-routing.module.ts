import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetdefComponent } from './assetdef/assetdef.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { from } from 'rxjs';
import { ListvendorComponent } from './listvendor/listvendor.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { PurchaseManagerComponent } from './purchase-manager/purchase-manager.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';


const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'create',component:AssetdefComponent,canActivate: [AuthGuard]},
  {path:'admin',component:AdminComponent,canActivate: [AuthGuard]},
  {path:'edit/:id',component:AssetEditComponent,canActivate: [AuthGuard]},
  {path:'vedit/:id',component:EditvendorComponent,canActivate: [AuthGuard]},

  {path:'assets',component:AssetListComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent,canActivate: [AuthGuard]},
  {path:'user',component:UserComponent,canActivate: [AuthGuard]},
  {path:'vlist',component: ListvendorComponent,canActivate: [AuthGuard]},
  {path:'vadd', component: AddvendorComponent,canActivate: [AuthGuard]},
  {path:'plist',component:PurchaselistComponent,canActivate: [AuthGuard]},
  {path:'pmanager',component:PurchaseManagerComponent,canActivate: [AuthGuard]},
  {path:'pedit/:id',component:PurchaseEditComponent,canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

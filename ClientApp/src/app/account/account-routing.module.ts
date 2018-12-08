import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from '../account/account-home/account-home.component';
import { AuthGuard } from '../shared/_guards/auth.guard';

const routes1: Routes = [
    {  
        path: '',
        component: AccountHomeComponent,
        canActivate: [AuthGuard]
    }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes1)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

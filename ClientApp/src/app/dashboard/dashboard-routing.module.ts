import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from '../shared/_guards/admin.guard';

const routes: Routes = [
{       path:'', 
        component: DashboardHomeComponent,
        canActivateChild: [AdminGuard],
        children: [
        {
                path: 'admin',
                component: AdminComponent 
                
        }
        ]
    }
        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

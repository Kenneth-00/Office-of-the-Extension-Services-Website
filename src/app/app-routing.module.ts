import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AddReportComponent } from './modules/add-report/add-report.component';
import { ViewReportComponent } from './modules/view-report/view-report.component';
import { ViewActualReportComponent } from './modules/view-actual-report/view-actual-report.component';
import { ViewUserlistComponent } from './modules/view-userlist/view-userlist.component';
import { ViewProfileComponent } from './modules/view-profile/view-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ViewDownloadsComponent } from './modules/view-downloads/view-downloads.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'main', component:DefaultComponent,
   children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'add-report', component:AddReportComponent},
    {path:'view-report', component:ViewReportComponent},
    {path:'view-actual-report', component:ViewActualReportComponent},
    {path:'view-profile', component:ViewProfileComponent},
    {path:'view-userlist', component:ViewUserlistComponent},
    {path:'view-downloads', component:ViewDownloadsComponent}
   ]},
  {path:'', redirectTo:'/main/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

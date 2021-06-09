import { Section80ccdComponent } from './section80ccd/section80ccd.component';
import { Section7Component } from './section7/section7.component';
import { Section80eeComponent } from './section80ee/section80ee.component';
import { Section6Component } from './section6/section6.component';
import { Section80ttaComponent } from './section80tta/section80tta.component';
import { Section5Component } from './section5/section5.component';
import { Section80uComponent } from './section80u/section80u.component';
import { Section4Component } from './section4/section4.component';
import { Section80gComponent } from './section80g/section80g.component';
import { Section3Component } from './section3/section3.component';
import { Section1barodaComponent } from './section1 - baroda/section1baroda.component';
import { Section1hdfcComponent } from './section1 - hdfc/section1hdfc.component';
import { Section1icicComponent } from './section1 - icic/section1icic.component';
import { Section1sbiComponent } from './section1 - sbi/section1sbi.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {CompanyPageComponent}  from './company-page/company-page.component';
import { AuthGuard } from './services/auth.guard';
import {Section1Component} from './section1/section1.component';
import {ServicesPageComponent} from './services-page/services-page.component'
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard.component'
import {TaxComponent} from './tax/tax.component';
import {Section80cComponent} from './section80c/section80c.component';
import {Section2Component} from './section2/section2.component';
import {Section80dComponent} from './section80d/section80d.component'
import {DropdownComponent} from './dropdown/dropdown.component'
import {SectionComponent} from './section/section.component';
import {recomComponent} from './recom-form/recom-form.component'
import { HelpComponent } from './Help/Help/help.component';
const routes: Routes = [
    { path: '', redirectTo: '/home ', pathMatch: 'full' },
    
    
    // catch-all in case no other path matched
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path:'section',component:SectionComponent,canActivate:[AuthGuard]} ,
    {path:'home-dashboard',component:HomeDashboardComponent},
    {path:'tax',component:TaxComponent, canActivate: [AuthGuard]},
    {path:'home',component:CompanyPageComponent},
    {path:'services',component:ServicesPageComponent},  
    {path:'about-us',component:AboutUsComponent},
    {path:'help',component:HelpComponent},
    {path:'section1',component:Section1Component} ,
    {path:'section2',component:Section2Component} ,
    {path:'section3',component:Section3Component} ,
    {path:'section4',component:Section4Component} ,
    {path:'section5',component:Section5Component} ,
    {path:'section6',component:Section6Component} ,
    {path:'section7',component:Section7Component} ,
    {path:'recom-form',component:recomComponent,canActivate: [AuthGuard]},
    {path:'dropdown',component:DropdownComponent, canActivate: [AuthGuard]},
    {path:'section1-sbi',component:Section1sbiComponent} ,
    {path:'section1-hdfc',component:Section1hdfcComponent} ,
    {path:'section1-baroda',component:Section1barodaComponent} ,
    {path:'section1-icic',component:Section1icicComponent} ,
    // {path:'section80c-lic',component:Section80clicComponent,canActivate:[AuthGuard]},
    

    {path:'section80c',component:Section80cComponent,canActivate:[AuthGuard]},
   
    {path:'section80d',component:Section80dComponent,canActivate:[AuthGuard]},
    {path:'section80g',component:Section80gComponent,canActivate:[AuthGuard]},
    {path:'section80u',component:Section80uComponent,canActivate:[AuthGuard]},
    {path:'section80tta',component:Section80ttaComponent,canActivate:[AuthGuard]},
    {path:'section80ee',component:Section80eeComponent,canActivate:[AuthGuard]},
    {path:'section80ccd',component:Section80ccdComponent,canActivate:[AuthGuard]},
    

    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'home-page', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'verify-email', component: VerifyEmailComponent },
    { path: '**', component: CompanyPageComponent },      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

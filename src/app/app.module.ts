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
import { Section80dComponent } from './section80d/section80d.component';
import { Section2Component } from './section2/section2.component';
import { Section1icicComponent } from './section1 - icic/section1icic.component';
import { Section1barodaComponent } from './section1 - baroda/section1baroda.component';
import { Section1hdfcComponent } from './section1 - hdfc/section1hdfc.component';
import { Section1sbiComponent } from './section1 - sbi/section1sbi.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {CompanyPageComponent} from './company-page/company-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { HelpComponent } from './Help/Help/help.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { Section1Component } from './section1/section1.component';
//import {HomedashboardComponent} from './home-dashboard/dashboard.component';
import {ServicesPageComponent} from './services-page/services-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard.component';
import {TaxComponent} from './tax/tax.component';
import { Section80cComponent } from './section80c/section80c.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {SectionComponent} from './section/section.component';
import {recomComponent } from './recom-form/recom-form.component';
import { setSyntheticTrailingComments } from 'typescript';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SignupComponent,
        LoginComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
        DashboardComponent,
        AdminDashboardComponent,
        CompanyPageComponent,
        Section1Component,
        ServicesPageComponent,
        AboutUsComponent,
        HomeDashboardComponent,
        TaxComponent,
        Section80cComponent,
        DropdownComponent,
        SectionComponent,
        recomComponent,
        HelpComponent,
        Section1sbiComponent,
        Section1hdfcComponent,
        Section1barodaComponent,
        Section1icicComponent,
        Section2Component,
        Section80dComponent,
        Section3Component,
        Section80gComponent,
        Section4Component,
        Section80uComponent,
        Section5Component,
        Section80ttaComponent,
        Section6Component,
        Section80ttaComponent,
        Section80eeComponent,
        Section7Component,
        Section80ccdComponent
   

        
        
    
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        AngularFireModule.initializeApp(environment.firebase),  // imports firebase/app needed for everything
        AngularFirestoreModule,                                 // imports firebase/firestore, only needed for database features
        // AngularFireStorageModule,                               // imports firebase/storage only needed for storage features
        AngularFireDatabaseModule,

        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
       
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

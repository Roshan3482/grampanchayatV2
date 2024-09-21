import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PropertyNewComponent } from './property-new/property-new.component';
import { GrampanchayatDetailComponent } from './grampanchayat-detail/grampanchayat-detail.component';
import { ReportMenuComponent } from './report-menu/report-menu.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { UserListComponent } from './user-list/user-list.component';
import { PropertyRatecardComponent } from './property-ratecard/property-ratecard.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HighlightsComponent } from './highlights/highlights.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyListComponent } from './property-list/property-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
    PropertyNewComponent,
    GrampanchayatDetailComponent,
    ReportMenuComponent,
    SendNotificationComponent,
    UserListComponent,
    PropertyRatecardComponent,
    HighlightsComponent,
    LoginComponent,
    PropertyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyNewComponent } from './property-new/property-new.component';
import { ReportMenuComponent } from './report-menu/report-menu.component';
import { GrampanchayatDetailComponent } from './grampanchayat-detail/grampanchayat-detail.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { PropertyRatecardComponent } from './property-ratecard/property-ratecard.component';
import { UserListComponent } from './user-list/user-list.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { LoginComponent } from './login/login.component';
import { PropertyListComponent } from './property-list/property-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'highlight', component: HighlightsComponent },
  { path: 'property_new', component: PropertyNewComponent },
  {path: 'property_list', component: PropertyListComponent},
  { path: 'report_menu', component: ReportMenuComponent },
  { path: 'grampanchayat_detail', component: GrampanchayatDetailComponent },
  { path: 'send_notification', component: SendNotificationComponent },
  { path: 'property_ratecard', component: PropertyRatecardComponent },
  { path: 'user_list', component: UserListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

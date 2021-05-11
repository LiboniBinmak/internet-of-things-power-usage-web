import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, DatePipe, DecimalPipe, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedReactiveFormComponent } from './components/shared-reactive-form/shared-reactive-form.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NzCardModule, NzAvatarModule, NzDescriptionsModule, NzCheckboxModule, NzSelectModule, NzPageHeaderModule, NzButtonModule, NzStatisticModule, NzDropDownModule, NzToolTipModule, NzPopoverModule, NzPopconfirmModule, NzDatePickerModule, NzDrawerModule, NzGridModule, NzUploadModule, NzFormModule, NzDividerModule, NzRadioModule, NzMessageModule, NzRateModule, NzInputNumberModule, NzInputModule, NzTableModule, NzSpinModule, NzModalModule, NzIconModule } from 'ng-zorro-antd';
import { ConfigService } from './services/config.service';
import { RequestHandlerService } from './services/request-handler.service';
import { WorkPlaceComponent } from './pages/work-place/work-place.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { ApplianceComponent } from './pages/appliance/appliance.component';
import { StatusComponent } from './pages/status/status.component';
import { UserComponent } from './pages/user/user.component';
import { HouseHoldComponent } from './pages/house-hold/house-hold.component';
import { HouseHoldUserComponent } from './pages/house-hold-user/house-hold-user.component';
import { TownComponent } from './pages/town/town.component';
import { LiveTotalPowerChartComponent } from './components/live-total-power-chart/live-total-power-chart.component';
import { LiveApplianceChartComponent } from './components/live-appliance-chart/live-appliance-chart.component';
import { HouseholdTrendChartComponent } from './components/household-trend-chart/household-trend-chart.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SharedReactiveFormComponent,
    SharedTableComponent,
    WorkPlaceComponent,
    MonitorComponent,
    ApplianceComponent,
    StatusComponent,
    UserComponent,
    HouseHoldComponent,
    HouseHoldUserComponent,
    TownComponent,
    LiveTotalPowerChartComponent,
    LiveApplianceChartComponent,
    HouseholdTrendChartComponent,
  ],
  imports: [
    NzCardModule ,
    NzAvatarModule ,
    NzDescriptionsModule ,
    NzCheckboxModule ,
    NzSelectModule ,
    NzIconModule ,
    NzPageHeaderModule ,
    NzButtonModule ,
    NzStatisticModule ,
    NzDropDownModule ,
    NzModalModule ,
    NzToolTipModule ,
    NzPopoverModule ,
    NzPopconfirmModule ,
    NzDatePickerModule ,
    NzDrawerModule ,
    NzGridModule ,
    NzUploadModule ,
    NzFormModule ,
    NzDividerModule ,
    ReactiveFormsModule ,
    NzRadioModule ,
    NzMessageModule ,
    NzRateModule ,
    NzInputNumberModule ,
    NzInputModule ,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzTableModule,
    NzSpinModule,
    HttpClientModule,
    CommonModule ,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'libs.auth0.com',
      clientId: '56nk9JKcBW5S16DPq1s8vHfeUc4n1DWQ'
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },DatePipe, DecimalPipe, ConfigService, RequestHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

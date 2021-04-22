import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { NzCardModule, NzAvatarModule, NzDescriptionsModule, NzCheckboxModule, NzSelectModule, NzPageHeaderModule, NzButtonModule, NzStatisticModule, NzDropDownModule, NzToolTipModule, NzPopoverModule, NzPopconfirmModule, NzDatePickerModule, NzDrawerModule, NzGridModule, NzUploadModule, NzFormModule, NzDividerModule, NzRadioModule, NzMessageModule, NzRateModule, NzInputNumberModule, NzInputModule, NzTableModule, NzSpinModule } from 'ng-zorro-antd';
import { ConfigService } from './services/config.service';
import { RequestHandlerService } from './services/request-handler.service';
import { AuthService } from './services/auth.service';
import { WorkPlaceComponent } from './pages/work-place/work-place.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { ApplianceComponent } from './pages/appliance/appliance.component';
import { StatusComponent } from './pages/status/status.component';

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
  ],
  imports: [
    NzCardModule ,
    NzAvatarModule ,
    NzDescriptionsModule ,
    NzCheckboxModule ,
    NzSelectModule ,
    NzPageHeaderModule  ,
    NzButtonModule ,
    NzStatisticModule ,
    NzDropDownModule ,
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
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },DatePipe, DecimalPipe, ConfigService, RequestHandlerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

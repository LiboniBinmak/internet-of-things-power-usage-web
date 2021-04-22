import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedReactiveFormComponent } from './components/shared-reactive-form/shared-reactive-form.component';
import { ApplianceComponent } from './pages/appliance/appliance.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { StatusComponent } from './pages/status/status.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WorkPlaceComponent } from './pages/work-place/work-place.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'appliance', component: ApplianceComponent },
  { path: 'status', component: StatusComponent },
  { path: 'work-place', component: WorkPlaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ApplianceComponent } from './pages/appliance/appliance.component';
import { HouseHoldUserComponent } from './pages/house-hold-user/house-hold-user.component';
import { HouseHoldComponent } from './pages/house-hold/house-hold.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { StatusComponent } from './pages/status/status.component';
import { TownComponent } from './pages/town/town.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WorkPlaceComponent } from './pages/work-place/work-place.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'monitor', component: MonitorComponent , canActivate: [AuthGuard] },
  { path: 'appliance', component: ApplianceComponent , canActivate: [AuthGuard] },
  { path: 'status', component: StatusComponent, canActivate: [AuthGuard]  },
  { path: 'work-place', component: WorkPlaceComponent , canActivate: [AuthGuard] },
  { path: 'town', component: TownComponent , canActivate: [AuthGuard] },
  { path: 'house-hold', component: HouseHoldComponent , canActivate: [AuthGuard] },
  { path: 'house-hold-user', component: HouseHoldUserComponent , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

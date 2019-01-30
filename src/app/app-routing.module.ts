import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LogsComponent } from './pages/logs/logs.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "settings", component: SettingsComponent},
  {path: "logs", component: LogsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

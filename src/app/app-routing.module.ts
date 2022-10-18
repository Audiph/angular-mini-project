import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'capabilities', component: CapabilitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
      .then( m => m.LoginPageModule), canActivate: [LoginGuard]
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module')
      .then( m => m.SplashScreenPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./pages/medical-appointment/medical-appointment.module')
      .then( m => m.MedicalAppointmentPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'make-appointment',
    loadChildren: () => import('./pages/make-an-appointment/make-an-appointment.module')
      .then( m => m.MakeAnAppointmentPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'make-appointment/:id',
    loadChildren: () => import('./pages/make-an-appointment/make-an-appointment.module')
      .then( m => m.MakeAnAppointmentPageModule), canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

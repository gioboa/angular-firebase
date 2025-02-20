import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login.component';
import { ProtectedContentComponent } from './protected-content.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'protected-content',
    component: ProtectedContentComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '' },
];

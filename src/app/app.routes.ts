import { Routes } from '@angular/router';
import { Login } from './admin/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Technology } from './pages/technology/technology';
import { Project } from './pages/project/project';
import { Certificate } from './pages/certificate/certificate';
import { Contact } from './pages/contact/contact';
import { adminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
  { path: 'admin/login', component: Login },
  { path: '', component: Dashboard },

  {path: 'admin/manage-home', component: Home, canActivate: [adminGuard] },
  {path: 'admin/manage-about', component: About, canActivate: [adminGuard] },
  {path: 'admin/manage-technology', component: Technology, canActivate: [adminGuard] },
  {path: 'admin/manage-project', component: Project, canActivate: [adminGuard] },
  {path: 'admin/manage-certificate', component: Certificate, canActivate: [adminGuard] },
  {path: 'admin/manage-contact', component: Contact, canActivate: [adminGuard] },
];

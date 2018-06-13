import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './usersList/usersList.component';
import { PastProjectsComponent } from './pastProjects/pastProjects.component';
import { MyProjectComponent } from './myProject/myProject.component'
import { NotFoundComponent } from './notfound/notfound.component'
import { WorkerPanelComponent } from 'app/workerPanel/workerPanel.component';
import { WorkerStudentsComponent } from 'app/workerStudents/workerStudents.component';


const appRoutes: Routes = [
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
  { path: 'usersList', component: UsersListComponent },
  { path: 'pastProjects', component: PastProjectsComponent },
  { path: 'myProject', component: MyProjectComponent },
  { path: 'workerPanel', component: WorkerPanelComponent },
  { path: 'workerStudents', component: WorkerStudentsComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'notfound' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

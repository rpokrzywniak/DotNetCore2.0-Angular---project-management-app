import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';
import {
  ButtonModule,
  InputTextModule,
  PasswordModule,
  GrowlModule,
  DataListModule,
  FileUploadModule,
  DataTableModule,
  MenubarModule,
  TieredMenuModule,
  ToolbarModule,
  MenuItem,
  TabViewModule,
  PanelModule,
  InputSwitchModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { SelectItem } from 'primeng/api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './usersList/usersList.component'
import { AdminComponent } from './usersList/admin/admin.component'
import { WorkerComponent } from './usersList/worker/worker.component'
import { StudentComponent } from './usersList/student/student.component'
import { AllComponent } from './usersList/all/all.component'
import { PastProjectsComponent } from './pastProjects/pastProjects.component'
import { NotFoundComponent} from './notfound/notfound.component'
import { MyProjectComponent } from './myProject/myProject.component'
/* Account Imports */
import { AccountModule } from './account/account.module';
import { SharedModule } from './shared/modules/shared.module';

import { ConfigService } from './shared/utils/config.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersListComponent,
    PastProjectsComponent,
    MyProjectComponent,
    AdminComponent,
    NotFoundComponent,
    WorkerComponent,
    StudentComponent,
    AllComponent
  ],
  imports: [
    AccountModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    PasswordModule,
    GrowlModule,
    DataListModule,
    TableModule,
    DialogModule,
    FileUploadModule,
    DataTableModule,
    MenubarModule,
    TieredMenuModule,
    ToolbarModule,
    CheckboxModule,
    DropdownModule,
    TabViewModule,
    PanelModule,
    InputSwitchModule,
    SharedModule,
    HttpModule,
    routing
  ],
  providers: [ConfigService, { 
    provide: XHRBackend, 
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

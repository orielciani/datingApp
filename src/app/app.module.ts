import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Components
import { NavComponent } from './shared/nav/nav.component';
import { SideComponent } from './shared/side/side.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { MembersComponent } from './pages/members/members.component';
import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { MemberDetailComponent } from './pages/members/member-detail/member-detail.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ListsComponent } from './pages/lists/lists.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MemberCardComponent } from './pages/members/member-card/member-card.component';
import { MemberEditComponent } from './pages/members/member-edit/member-edit.component';
import { PhotoEditorComponent } from './pages/members/photo-editor/photo-editor.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './_modules/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";

// Interceptor
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideComponent,
    HomeComponent,
    RegisterComponent,
    MembersComponent,
    MemberListComponent,
    MemberDetailComponent,
    MessagesComponent,
    ListsComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UserListingComponent} from './user-listing/user-listing.component';

import {UserDomainService} from './services/user-domain.service';
import {NewUserComponent} from './new-user/new-user.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/user-listing', pathMatch: 'full'},
  {path: 'user-listing', component: UserListingComponent},
  {path: 'new-user', component: NewUserComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UserListingComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [UserDomainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

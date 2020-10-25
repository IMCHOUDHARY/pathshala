import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VideosComponent } from './videos/videos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSidenavModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

// const material = [
//   MatSidenavModule
// ];

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'videos', component: VideosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

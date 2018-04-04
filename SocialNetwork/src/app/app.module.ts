import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    TimelineComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

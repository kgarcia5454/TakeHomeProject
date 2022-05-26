import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { GithubFeedComponent } from './github-feed/github-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubFeedComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

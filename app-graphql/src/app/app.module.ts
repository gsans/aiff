import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { client } from './client';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LoadingComponent } from './loading/loading.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LoadingComponent,
    TweetComponent,
    TweetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

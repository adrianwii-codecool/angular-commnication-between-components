import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderService} from './services/loader.service';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {LoaderComponent} from './components/shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    SearchComponent,
    LoaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

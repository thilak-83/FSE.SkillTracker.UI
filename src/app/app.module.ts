import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillTrackerHttpInterceptor } from './core/skill-tracker-http.interceptor';
import { SearchModule } from './search/search.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
      ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SkillTrackerHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
    })
export class AppModule { }

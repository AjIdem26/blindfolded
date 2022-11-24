import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { LoginModule } from '../login/login.module';
import { BlindfoldedRoutingModule } from './blindfolded-routing.module';
import { BlindfoldedComponent } from './components/blindfolded/blindfolded.component';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    BlindfoldedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlindfoldedRoutingModule,
    LoginModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/bf'
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [],
  exports: [BlindfoldedComponent]
})
export class BlindfoldedModule { }

export function appInitializerFactory(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('en');
    return translate.use('en').toPromise();
  };

}export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot(
      [
        { path: '', loadChildren: './home/home.module#HomeModule' },
        { path: 'about', loadChildren: './about/about.module#AboutModule' },
        {
          path: 'contact',
          loadChildren: './contact/contact.module#ContactModule'
        }
      ],
      { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }
    ),
    TransferHttpCacheModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

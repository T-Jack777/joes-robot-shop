import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductService } from './services/product.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent, 
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

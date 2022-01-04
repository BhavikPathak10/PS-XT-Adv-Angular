import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BannerComponent } from './features/banner/banner.component';
import { ECommerceComponent } from './features/e-commerce/e-commerce.component';
import { TableSortersComponent } from './features/table-sorters/table-sorters.component';
import { DynamicDivsComponent } from './features/dynamic-divs/dynamic-divs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductViewComponent } from './features/e-commerce/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ECommerceComponent,
    TableSortersComponent,
    DynamicDivsComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

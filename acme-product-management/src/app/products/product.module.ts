import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailComponent } from '../products/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }

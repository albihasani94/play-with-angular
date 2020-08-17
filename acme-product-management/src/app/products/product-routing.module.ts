import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductDetailGuard } from '../products/product-detail.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'products/:id',
                component: ProductDetailComponent,
                canActivate: [ProductDetailGuard]
            }
        ])
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule { };

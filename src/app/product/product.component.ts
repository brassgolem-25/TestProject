import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-product',
  imports: [TableModule,HeaderComponent,FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    products = [
        {
            id: '1000',
            code: 'BAMWATCH23',
            name: 'Bamboo Watch',
            description: 'Product Description',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'BLKWATCH99',
            name: 'Black Watch',
            description: 'Product Description',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1002',
            code: 'BLUEBAND77',
            name: 'Blue Band',
            description: 'Product Description',
            price: 79,
            category: 'Fitness',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1003',
            code: 'BLUETSHIRT45',
            name: 'Blue T-Shirt',
            description: 'Product Description',
            price: 29,
            category: 'Clothing',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1004',
            code: 'BRACELET12',
            name: 'Bracelet',
            description: 'Product Description',
            price: 15,
            category: 'Accessories',
            quantity: 73,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1005',
            code: 'BRNPURSE88',
            name: 'Brown Purse',
            description: 'Product Description',
            price: 120,
            category: 'Accessories',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1006',
            code: 'CHKBRAC99',
            name: 'Chakra Bracelet',
            description: 'Product Description',
            price: 32,
            category: 'Accessories',
            quantity: 5,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1007',
            code: 'GXEARRINGS01',
            name: 'Galaxy Earrings',
            description: 'Product Description',
            price: 34,
            category: 'Accessories',
            quantity: 23,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1008',
            code: 'GAMCTRL55',
            name: 'Game Controller',
            description: 'Product Description',
            price: 99,
            category: 'Electronics',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 4
        },
        {
            id: '1009',
            code: 'GAMSET200',
            name: 'Gaming Set',
            description: 'Product Description',
            price: 299,
            category: 'Electronics',
            quantity: 63,
            inventoryStatus: 'INSTOCK',
            rating: 3
        }
  ];
  
}

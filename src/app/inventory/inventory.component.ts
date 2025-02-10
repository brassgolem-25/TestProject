import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-inventory',
  imports: [TableModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  inventory = [
    {
        id: '3000',
        productCode: 'BAMWATCH23',
        productName: 'Bamboo Watch',
        category: 'Accessories',
        stockLevel: 24,
        warehouseLocation: 'A1'
    },
    {
        id: '3001',
        productCode: 'LEAWALLET45',
        productName: 'Leather Wallet',
        category: 'Accessories',
        stockLevel: 50,
        warehouseLocation: 'B2'
    },
    {
        id: '3002',
        productCode: 'SUNGLASS99',
        productName: 'Sunglasses',
        category: 'Accessories',
        stockLevel: 18,
        warehouseLocation: 'C3'
    },
    {
        id: '3003',
        productCode: 'WRISTBAND77',
        productName: 'Wristband',
        category: 'Accessories',
        stockLevel: 75,
        warehouseLocation: 'D4'
    },
    {
        id: '3004',
        productCode: 'SPTSHOES88',
        productName: 'Sport Shoes',
        category: 'Footwear',
        stockLevel: 30,
        warehouseLocation: 'E5'
    },
    {
        id: '3005',
        productCode: 'RUNSHORTS66',
        productName: 'Running Shorts',
        category: 'Apparel',
        stockLevel: 60,
        warehouseLocation: 'F6'
    },
    {
        id: '3006',
        productCode: 'TNRACKET55',
        productName: 'Tennis Racket',
        category: 'Sports',
        stockLevel: 22,
        warehouseLocation: 'G7'
    },
    {
        id: '3007',
        productCode: 'SMTCASE20',
        productName: 'Smartphone Case',
        category: 'Accessories',
        stockLevel: 100,
        warehouseLocation: 'H8'
    },
    {
        id: '3008',
        productCode: 'SMARTWATCH10',
        productName: 'Smartwatch',
        category: 'Electronics',
        stockLevel: 40,
        warehouseLocation: 'I9'
    }
];

}

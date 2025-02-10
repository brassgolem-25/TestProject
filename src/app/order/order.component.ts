import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-order',
  imports: [TableModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
  orders = [
    {
      id: '2000',
      orderNumber: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2025-01-01',
      shippingAddress: '123 Main St, Cityville',
      status: 'Shipped',
      totalAmount: 120
    },
    {
      id: '2001',
      orderNumber: 'ORD002',
      customerName: 'Jane Smith',
      orderDate: '2025-02-01',
      shippingAddress: '456 Oak Ave, Townsville',
      status: 'Pending',
      totalAmount: 200
    },
    {
      id: '2002',
      orderNumber: 'ORD003',
      customerName: 'Emily Davis',
      orderDate: '2025-03-01',
      shippingAddress: '789 Pine Rd, Village City',
      status: 'Delivered',
      totalAmount: 180
    },
    {
      id: '2003',
      orderNumber: 'ORD004',
      customerName: 'Michael Johnson',
      orderDate: '2025-04-15',
      shippingAddress: '234 Maple Blvd, Greenfield',
      status: 'Shipped',
      totalAmount: 150
    },
    {
      id: '2004',
      orderNumber: 'ORD005',
      customerName: 'Sarah Wilson',
      orderDate: '2025-05-10',
      shippingAddress: '567 Birch St, Springfield',
      status: 'Pending',
      totalAmount: 250
    },
    {
      id: '2005',
      orderNumber: 'ORD006',
      customerName: 'David Lee',
      orderDate: '2025-06-20',
      shippingAddress: '678 Cedar Ln, Roseville',
      status: 'Delivered',
      totalAmount: 130
    },
    {
      id: '2006',
      orderNumber: 'ORD007',
      customerName: 'Olivia Harris',
      orderDate: '2025-07-05',
      shippingAddress: '890 Redwood Dr, Hilltop',
      status: 'Cancelled',
      totalAmount: 80
    }
  ];
}

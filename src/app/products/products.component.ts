import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any = [
    {
      description: "Plataforma para gestão o público B2B.",
      img: 'assets/images/wellness.png',
      title: 'CrossX',
    },
    {
      description: "Plataforma para gestão de pedidos",
      img: 'assets/images/oms.png',
      title: 'Order Management System',
    },
    {
      description: "Plataforma de gestão para o público B2B Enterprise.",
      img: 'assets/images/beauty.png',
      title: 'Avec',
    }
  ];

  constructor(private productService: ProductService, private contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  like(productName: string): void {
    this.productService.like(productName);
  }

  dislike(productName: string): void {
    this.productService.dislike(productName);
  }

  get hasContact(): boolean {
    return !!this.contactService.get();
  }

}

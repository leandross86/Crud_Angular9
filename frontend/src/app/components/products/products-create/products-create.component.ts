import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.showMessage('Produto criado com sucesso!')
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}

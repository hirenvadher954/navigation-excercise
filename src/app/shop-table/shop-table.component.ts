import { Component, OnInit } from '@angular/core';

export interface ShoppingDetails {
  image: string;
  productName: string;
  productCode: number;
  branchName: string;
  branchCode: number;
  shippingAddress: string;
}

const ELEMENT_DATA: ShoppingDetails[] = [
  {
    image:
      'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-physical-orange-slices-image_1364049.jpg',
    productName: 'orange',
    productCode: 1,
    branchName: 'ABC',
    branchCode: 55,
    shippingAddress: 'Near PQR',
  },
  {
    image:
      'https://cdn.imgbin.com/1/10/20/imgbin-mango-mango-vQn4r28Mx7t27K1682iKEvAWE.jpg',
    productName: 'mango',
    productCode: 2,
    branchName: 'MNG',
    branchCode: 40,
    shippingAddress: 'Near Gandhinagar',
  },
  {
    image:
      'https://thumbnail.imgbin.com/9/16/23/imgbin-apple-95uuwvkHXKhGXbtNXPBEAT5bs_t.jpg',
    productName: 'apple',
    productCode: 3,
    branchName: 'KML',
    branchCode: 90,
    shippingAddress: 'Near XYZ',
  },
];

@Component({
  selector: 'app-shop-table',
  templateUrl: './shop-table.component.html',
  styleUrls: ['./shop-table.component.css'],
})
export class ShopTableComponent implements OnInit {
  name:string = ""


  displayedColumns: string[] = [
    'image',
    'productName',
    'productCode',
    'branchName',
    'branchCode',
    'shippingAddress',
    'details',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  getDetails(i: number) {
    alert(
      'Product Name:- ' +
        this.dataSource[i].productName +
        '\n' +
        'Product Code:- ' +
        this.dataSource[i].productCode +
        '\n' +
        'Branch Name:- ' +
        this.dataSource[i].branchName +
        '\n' +
        'Branch Code:- ' +
        this.dataSource[i].branchCode +
        '\n' +
        'Shipping Address:- ' +
        this.dataSource[i].shippingAddress +
        '\n'
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  constructor() {}
  title = 'Title';
  chaned = true;

  arrProduct: Product[] = [
    {
      name: 'Sản phẩm 1',
      description: 'Mô tả 1',
      image: '../../../assets/image/sad.jpg',
      price: 500000,
      status: true
    },
    {
      name: 'Sản phẩm 2',
      description: 'Mô tả 2',
      image: '../../../assets/image/sad.jpg',
      price: 500000,
      status: true
    },
    {
      name: 'Sản phẩm 3',
      description: 'Mô tả 3',
      image: '../../../assets/image/sad.jpg',
      price: 500000,
      status: false
    },
    {
      name: 'Sản phẩm 4',
      description: 'Mô tả 4',
      image: '../../../assets/image/sad.jpg',
      price: 500000,
      status: true
    },
    {
      name: 'Sản phẩm 5',
      description: 'Mô tả 5',
      image: '../../../assets/image/sad.jpg',
      price: 500000,
      status: false
    },
    {
      name: 'Sản phẩm 6',
      description: 'Mô tả 6',
      image: '../../../assets/image/sad.jpg',
      price: 500000,
      status: false
    }
  ];

  changeTitle = event => {
    this.chaned = !this.chaned;
    if (!this.chaned) {
      this.title = 'Changed';
    } else {
      this.title = 'Title';
    }
  }

  ngOnInit() {}
}

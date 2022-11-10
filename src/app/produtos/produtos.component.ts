import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {
  
  selectedProduto?: Produto;

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  onSelect(produto: Produto): void {
    this.selectedProduto = produto;
  }

  getProdutos(): void {
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }
}
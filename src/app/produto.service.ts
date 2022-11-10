import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Produto } from './produto';
import { PRODUTOS } from './mock-produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Observable<Produto[]> {
    const produtos = of(PRODUTOS);
    return produtos;
  }
}

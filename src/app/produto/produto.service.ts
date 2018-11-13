import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private PRODUTO_STORAGE_KEY = "MC_PRODUTOS";

  private produtos : Produto[];

  constructor() {
    this.carregar();
  }

  obterProdutos() {
    return this.produtos;
  }

  adicionar() {
    this.produtos = this.produtos.concat(new Produto());
    this.salvar();
  }

  limparQuantidades() {
    this.produtos.forEach(produto => produto.quantidade = 0);
  }

  remover(element) {
    this.produtos = this.produtos.filter(elemento => elemento !== element);
    this.salvar();
  }

  getPrecoTotal() {
    this.salvar()
    return this.produtos.map(t => t.getTotal()).reduce((acc, value) => acc + value, 0);
  }

  private salvar() {
    localStorage.setItem(this.PRODUTO_STORAGE_KEY, JSON.stringify(this.produtos))
  }

  private carregar() {
    let json = localStorage.getItem(this.PRODUTO_STORAGE_KEY);
    this.produtos = json ? JSON.parse(json).map(
      p => new Produto(p.nome, p.preco, p.quantidade)
    ) :  [
      new Produto('Cerveja', 6.00, 0),
      new Produto('Chopp', 5.00, 0)
    ];
  }
}

import { Component } from '@angular/core';

class Produto {

  constructor(public nome : string = '', public preco : number = 0, public quantidade : number = 0) {

  }

  public getTotal() : number {
    return this.preco * this.quantidade;
  }

  public add()  {
    this.quantidade++;
  }

  public remove() {
    if(this.quantidade > 0) {
      this.quantidade --;
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['produto', 'preco', 'quantidade', 'total', 'acoes'];
  public produtos : Produto[];

  ngOnInit() {
    this.produtos = [
      new Produto('Cerveja', 6.00, 0),
      new Produto('Chopp', 5.00, 0)
    ];
  }

  addProduto() {
    this.produtos = this.produtos.concat(new Produto());
  }

  limparQuantidades() {
    this.produtos.forEach(produto => produto.quantidade = 0);
  }

  remover(element) {
    this.produtos = this.produtos.filter(elemento => elemento !== element)
  }

  getPrecoTotal() {
    return this.produtos.map(t => t.getTotal()).reduce((acc, value) => acc + value, 0);
  }
}

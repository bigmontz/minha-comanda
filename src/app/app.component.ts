import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource = new MatTableDataSource<Produto>();

  ngOnInit() {
    this.dataSource.data = [
      new Produto('Cerveja', 6.00, 5),
      new Produto('Chopp', 5.00, 3),
      new Produto('Pizza', 2.00, 2),
    ];
  }

  addProduto() {
    this.dataSource.data = this.dataSource.data.concat(new Produto());
  }

  limparQuantidades() {
    this.dataSource.data.forEach(produto => produto.quantidade = 0);
  }

  remover(element) {
    this.dataSource.data = this.dataSource.data.filter(elemento => elemento !== element)
  }

  getPrecoTotal() {
    return this.dataSource.data.map(t => t.getTotal()).reduce((acc, value) => acc + value, 0);
  }
}

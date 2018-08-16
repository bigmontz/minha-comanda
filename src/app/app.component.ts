import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

class Produto {

  constructor(public nome : string = '', public preco : number = 0, public quantidade : number = 0) {

  }

  public getTotal() : number {
    return this.preco * this.quantidade;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['produto', 'preco', 'quantidade', 'total'];
  dataSource = new MatTableDataSource<Produto>();

  ngOnInit() {
    this.dataSource.connect();
    this.dataSource.data = [
      new Produto('Cerveja', 6.00, 5),
      new Produto('Chopp', 5.00, 3),
      new Produto('Pizza', 2.00, 2),
    ];
  }

  addProduto() {
    this.dataSource.data.push(new Produto());
  }

  limparQuantidades() {
    this.dataSource.data.forEach(produto => produto.quantidade = 0);
  }

  getPrecoTotal() {
    return this.dataSource.data.map(t => t.getTotal()).reduce((acc, value) => acc + value, 0);
  }
}

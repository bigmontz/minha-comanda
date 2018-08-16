import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['produto', 'preco', 'quantidade', 'total'];
  dataSource = [{
    produto: 'Cerveja',
    preco: 6.00,
    quantidade: 3,
    getTotal: function () { return this.preco * this.quantidade }
  },{
    produto: 'Chopp',
    preco: 5.00,
    quantidade: 2,
    getTotal: function () { return this.preco * this.quantidade }
  },{
    produto: 'Pizaa',
    preco: 8,
    quantidade: 1,
    getTotal: function () { return this.preco * this.quantidade }
  }]

  getPrecoTotal() {
    return this.dataSource.map(t => t.getTotal()).reduce((acc, value) => acc + value, 0);
  }
}

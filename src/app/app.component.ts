import { Component } from '@angular/core';
import { ProdutoService } from './produto/produto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['produto', 'preco', 'quantidade', 'total', 'acoes'];

  constructor(private produtoService: ProdutoService) {

  }

  ngOnInit() {

  }

  obterProdutos() {
    return this.produtoService.obterProdutos();
  }

  addProduto() {
    this.produtoService.adicionar();
  }

  limparQuantidades() {
    this.produtoService.limparQuantidades();
  }

  remover(element) {
    this.produtoService.remover(element);
  }

  getPrecoTotal() {
    return this.produtoService.getPrecoTotal();
  }
}

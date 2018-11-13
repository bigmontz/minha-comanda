export class Produto {

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

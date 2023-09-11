class Comida {
  id: number;
  item: string;
  descricao: string;
  preco: GLfloat;
  img: string;
  sem?: string;
  quantidade: number;

  constructor(
    id: number,
    item: string,
    descricao: string,
    preco: GLfloat,
    img: string,
    sem: string,
    quantidade: number
  ) {
    this.id = id;
    this.item = item;
    this.descricao = descricao;
    this.preco = preco;
    this.img = img;
    this.sem = sem;
    this.quantidade = 1
  }
}

export default Comida

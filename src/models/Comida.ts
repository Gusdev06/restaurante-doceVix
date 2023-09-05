class Comida {
  id: number;
  nome: string;
  descricao: string;
  valor: GLfloat;
  imgComida: string;
  semana: string;
  quantidade: number;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    valor: GLfloat,
    imgComida: string,
    semana: string,
    quantidade: number
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.imgComida = imgComida;
    this.semana = semana;
    this.quantidade = 1
  }
}

export default Comida

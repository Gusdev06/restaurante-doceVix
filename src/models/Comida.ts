class Comida {
  id: number;
  nome: string;
  descricao: string;
  valor: GLfloat;
  imgComida: string;
  semana: string;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    valor: GLfloat,
    imgComida: string,
    semana: string
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.imgComida = imgComida;
    this.semana = semana;
  }
}

export default Comida

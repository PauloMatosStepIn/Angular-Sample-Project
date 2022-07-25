export class Curso {
  constructor(
    public id: number,
    public nome: string,
    public categoria: string,
    public cargaHoraria: number,
    public thumbnail: string,
    public data: string,
    public descricao: string = ""
  ) // public vagas?: number,
  // public requisitos: string[] = [],
  // public alunos: string[] = []
  {
    this.id = id;
    this.nome = nome;
    this.thumbnail = thumbnail;
    this.cargaHoraria = cargaHoraria;
    this.categoria = categoria;
    this.data = data;
    this.descricao = descricao;
    //   this.vagas = vagas;
    //   this.requisitos = requisitos;
    //   this.alunos = alunos;
  }
}

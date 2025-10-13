export class Atleta {
  id: number;
  nome: string;
  cognome: string;
  specialita: string;
  nazione: string;

  constructor(id: number, nome: string, cognome: string, specialita: string, nazione: string) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.specialita = specialita;
    this.nazione = nazione;
  }
}
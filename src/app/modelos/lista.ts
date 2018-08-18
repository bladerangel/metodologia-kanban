import { Atividade } from "./atividade";

export class Lista {

    constructor(
        public id: number,
        public nome: string,
        public quadroId: number
    ) { }
}

export enum ListaObrigatoria {
    Fazer = "Fazer",
    Fazendo = "Fazendo",
    Feito = "Feito"
}
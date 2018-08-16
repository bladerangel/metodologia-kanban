import { Atividade } from "./atividade";

export class Lista {

    constructor(
        private nome: string,
        private atividades: Atividade[]
    ) { }
}

enum ListaObrigatoria {
    Fazer,
    Fazendo,
    Feito
}
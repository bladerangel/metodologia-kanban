export class Lista {

    /*
    id gerando automaticamente pelo rest-api
    */
    constructor(
        public id: number,
        public nome: string,
        public quadroId: number
    ) { }
}

export enum ListaObrigatoria {
    Fazer = 'Fazer',
    Fazendo = 'Fazendo',
    Feito = 'Feito'
}

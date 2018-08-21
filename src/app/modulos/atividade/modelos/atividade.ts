export class Atividade {

    /*
    id gerando automaticamente pelo rest-api
    */
    constructor(
        public id: number,
        public titulo: string,
        public descricao: string,
        public quadroId: number,
        public listaId: number,
    ) { }
}
